import { create } from 'zustand'
import { Experiment, Treatment, Plant } from '@types/experiment'

interface ExperimentState {
  experiment: Experiment | null
  treatments: Treatment[]
  plants: Plant[]
  setExperiment: (experiment: Experiment) => void
  setTreatments: (treatments: Treatment[]) => void
  setPlants: (plants: Plant[]) => void
  addTreatment: (treatment: Treatment) => void
  updateTreatment: (treatment: Treatment) => void
  generatePlants: () => void
  clearAll: () => void
}

export const useExperimentStore = create<ExperimentState>((set, get) => ({
  experiment: null,
  treatments: [],
  plants: [],

  setExperiment: (experiment) => set({ experiment }),

  setTreatments: (treatments) => set({ treatments }),

  setPlants: (plants) => set({ plants }),

  addTreatment: (treatment) =>
    set((state) => ({
      treatments: [...state.treatments, treatment],
    })),

  updateTreatment: (treatment) =>
    set((state) => ({
      treatments: state.treatments.map((t) => (t.id === treatment.id ? treatment : t)),
    })),

  generatePlants: () => {
    const state = get()
    const experiment = state.experiment
    const treatments = state.treatments

    if (!experiment) return

    const newPlants: Plant[] = []
    let plantIndex = 0
    const sortedTreatments = [...treatments].sort(
      (a, b) => a.treatmentNumber - b.treatmentNumber,
    )

    for (const treatment of sortedTreatments) {
      for (let replica = 1; replica <= experiment.replicasPerTreatment; replica++) {
        const treatmentCode = `T${treatment.treatmentNumber}`
        const plantCode = `${treatmentCode}-R${String(replica).padStart(2, '0')}`

        const plant: Plant = {
          id: `plant-${plantIndex + 1}`,
          experimentId: experiment.id,
          treatmentId: treatment.id,
          treatmentName: treatment.name,
          replicaNumber: replica,
          plantCode,
          status: 'not-sown',
          createdAt: new Date(),
        }
        newPlants.push(plant)
        plantIndex++
      }
    }

    set({ plants: newPlants })
  },

  clearAll: () =>
    set({
      experiment: null,
      treatments: [],
      plants: [],
    }),
}))
