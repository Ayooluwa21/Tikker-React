const mongoose = require('mongoose');

const TicketTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date },
    time: { type: String },
    venue: { type: String },
    category: { type: String },
    ticketTypes: [TicketTypeSchema],
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', EventSchema);
