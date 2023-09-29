const MoneyCollection = require('../model/months')
const mongoose = require('mongoose')

const handle_get_all =async(req, res)=>{
    try {
        const collections = await MoneyCollection.find();
        res.status(200).json(collections);
      } catch (err) {
        res.status(500).json({ error: 'Error fetching money collections' });
      }
}
//////////////////////
const handle_add=async(req, res)=>{
    try {
        const newCollection = new MoneyCollection(req.body);
        await newCollection.save();
        res.status(201).json(newCollection);
      } catch (err) {
        res.status(400).json({ error: 'Error creating money collection' });
      }
}
/////////////////////
const handle_delete=async(req, res)=>{
    const { id } = req.params;

  try {
    const deletedCollection = await MoneyCollection.findByIdAndRemove(id);

    if (!deletedCollection) {
      return res.status(404).json({ error: 'Money collection not found' });
    }

    res.status(200).json(deletedCollection);
  } catch (err) {
    res.status(400).json({ error: 'Error deleting money collection' });
  }
}
///////////////////
const handle_edit = async (req, res) => {
    const { id } = req.params;
    const { name, phone, monthlyPayments } = req.body;
    const updates = {};
  
    if (name) {
      updates.name = name;
    }
  
    if (phone) {
      updates.phone = phone;
    }
  
    if (monthlyPayments) {
      for (const month in monthlyPayments) {
        if (monthlyPayments.hasOwnProperty(month)) {
          updates[`monthlyPayments.${month}`] = monthlyPayments[month];
        }
      }
    }
  
    try {
      const updatedCollection = await MoneyCollection.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );
  
      if (!updatedCollection) {
        return res.status(404).json({ error: 'Money collection not found' });
      }
  
      res.status(200).json(updatedCollection);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Error updating money collection' });
    }
  };
  
  

module.exports= {
    handle_get_all,
    handle_add,
    handle_delete,
    handle_edit
}