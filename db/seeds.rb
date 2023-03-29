@prototypes_data = [
  {
    name: 'First module / First prototype'
  },
  {
    name: 'First oscillator'
  },
  {
    name: 'Homework'
  },
  {
    name: 'Oscillator with React components'
  },
  {
    name: 'Tone.js basics'
  },
  {
    name: 'Experiment_1'
  },
  {
    name: 'Experiment_2'
  },
  {
    name: 'Tone.js with UI'
  },
  {
    name: 'Tone.js with UI, better change function'
  },
  {
    name: 'Experiment_3'
  },
  {
    name: 'Tone.js with UI, Composition'
  },
  {
    name: 'Tone.js with UI, Composition_2'
  },
  {
    name: 'Tone.js with UI, Sampler'
  },
  {
    name: 'My Synth'
  },
  {
    name: 'Aid Synth'
  },
  {
    name: 'JS'
  },
  {
    name: 'Effects modules'
  },
  {
    name: 'Effects UI components'
  },
  {
    name: 'First generative comp'
  },
  {
    name: 'Generative comp with pics'
  },
  {
    name: 'Generative comp with pics2'
  },
  {
    name: 'Conceptionn of store'
  },
  {
    name: 'Using promises'
  },
  {
    name: 'Using promises with store'
  },
  {
    name: 'Using promises with store (graphics)'
  },
  {
    name: 'Random stories comp (contentEditable)'
  },
  {
    name: 'Beginning P5'
  },
  {
    name: 'First canvas'
  },
  {
    name: 'Separated Data Layer'
  },
  {
    name: 'Random rects with buttons'
  },
  {
    name: 'Random rects with slider'
  },
  {
    name: 'Tiling'
  },
  {
    name: 'Grid'
  },
  {
    name: 'Grid with UI'
  },
  {
    name: 'Grid from circles'
  },
  {
    name: 'HW 1'
  },
  {
    name: 'Arc grid'
  },
  {
    name: 'Wave gradient'
  },
  {
    name: 'Wave gradient2'
  },
  {
    name: 'Circles illusion'
  },
  {
    name: 'Butterfly'
  },
  {
    name: 'ui'
  },
  {
    name: 'Objects'
  },
  {
    name: 'Calendar try'
  },
  {
    name: 'Gradients'
  },
  {
    name: 'Save html + canvas'
  },
  {
    name: 'Import image'
  },
  {
    name: 'Calendar + canvas'
  },
  {
    name: 'React example'
  }
]

def seed
  reset_db
  create_prototypes
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_prototypes
  @prototypes_data.each do |prototype_data|
    prototype = Prototype.create!(prototype_data)
    puts "#{prototype.name} prototype just created"
  end
end

seed
