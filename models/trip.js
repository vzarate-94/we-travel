import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = Schema({
  total: {type: Number, default: 0},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  travel: {type: Number, default: 0},
  lodging: {type: Number, default: 0},
  food: {type: Number, default: 0},
  activities: {type: Number, default: 0},
  misc: {type: Number, default: 0},
})

const tripSchema = Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  name: {type: String},
  img: {type: String},
  activities: [{type: mongoose.Schema.Types.ObjectId, ref: "Activity"}],
  attendees:[{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  budget: budgetSchema,
  country: {type: mongoose.Schema.Types.ObjectId, ref: "Country"},
  date: {type: Date},
  notes: {type: String},
  checklists: [{type: mongoose.Schema.Types.ObjectId, ref: "Checklist"}]
}, {
  timestamps: true,
})

const Trip = mongoose.model('Trip', tripSchema)

export {
  Trip
}

