const axios = require('axios');
const db = require('../config/db'); // Database connection

const FRESHSALES_API_KEY = process.env.FRESHSALES_API_KEY;
const FRESHSALES_DOMAIN = process.env.FRESHSALES_DOMAIN;

// Create a new contact
exports.createContact = async (req, res) => {
  const { first_name, last_name, email, mobile_number, data_store } = req.body;

  if (data_store === 'CRM') {
    try {
      const response = await axios.post(
        `https://${FRESHSALES_DOMAIN}/api/contacts`,
        {
          contact: {
            first_name,
            last_name,
            email,
            mobile_number
          }
        },
        {
          headers: {
            Authorization: `Token token=${FRESHSALES_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else if (data_store === 'DATABASE') {
    db.query(
      'INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES (?, ?, ?, ?)',
      [first_name, last_name, email, mobile_number],
      (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ id: result.insertId, message: 'Contact created in database' });
      }
    );
  }
};

// Retrieve a contact
exports.getContact = async (req, res) => {
  const { contact_id, data_store } = req.body;

  if (data_store === 'CRM') {
    try {
      const response = await axios.get(
        `https://${FRESHSALES_DOMAIN}/api/contacts/${contact_id}`,
        {
          headers: {
            Authorization: `Token token=${FRESHSALES_API_KEY}`
          }
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else if (data_store === 'DATABASE') {
    db.query('SELECT * FROM contacts WHERE id = ?', [contact_id], (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      if (result.length === 0) return res.status(404).json({ message: 'Contact not found' });
      res.status(200).json(result[0]);
    });
  }
};

// Update a contact
exports.updateContact = async (req, res) => {
  const { contact_id, new_email, new_mobile_number, data_store } = req.body;

  if (data_store === 'CRM') {
    try {
      const response = await axios.put(
        `https://${FRESHSALES_DOMAIN}/api/contacts/${contact_id}`,
        {
          contact: {
            email: new_email,
            mobile_number: new_mobile_number
          }
        },
        {
          headers: {
            Authorization: `Token token=${FRESHSALES_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else if (data_store === 'DATABASE') {
    db.query(
      'UPDATE contacts SET email = ?, mobile_number = ? WHERE id = ?',
      [new_email, new_mobile_number, contact_id],
      (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json({ message: 'Contact updated in database' });
      }
    );
  }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
  const { contact_id, data_store } = req.body;

  if (data_store === 'CRM') {
    try {
      await axios.delete(`https://${FRESHSALES_DOMAIN}/api/contacts/${contact_id}`, {
        headers: {
          Authorization: `Token token=${FRESHSALES_API_KEY}`
        }
      });
      res.status(200).json({ message: 'Contact deleted from CRM' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else if (data_store === 'DATABASE') {
    db.query('DELETE FROM contacts WHERE id = ?', [contact_id], (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(200).json({ message: 'Contact deleted from database' });
    });
  }
};

