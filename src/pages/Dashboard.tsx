import { useExperimentStore } from '@stores/experimentStore'
import EmptyState from '@components/common/EmptyState'

export default function Dashboard() {
  const experiment = useExperimentStore((state) => state.experiment)
  const treatments = useExperimentStore((state) => state.treatments)
  const plants = useExperimentStore((state) => state.plants)

  if (!experiment) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <EmptyState
          title="No hay experimento configurado"
          description="Comienza creando un nuevo experimento para comenzar a registrar datos."
          actionLabel="Crear experimento"
          actionPath="/experiment/setup"
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{experiment.name}</h1>
        <p className="text-gray-600 mt-2">{experiment.description}</p>
      </div>

      <div>
        <span
          className={`inline-block px-4 py-2 rounded-lg font-medium text-sm ${
            experiment.status === 'setup'
              ? 'bg-blue-100 text-blue-700'
              : experiment.status === 'in-progress'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {experiment.status === 'setup'
            ? 'Preparación'
            : experiment.status === 'in-progress'
            ? 'En curso'
            : 'Finalizado'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-6">
          <div className="text-sm text-gray-600 font-medium">🌱 Plantas</div>
          <div className="text-3xl font-bold text-gray-900 mt-2">{plants.length}</div>
          <div className="text-xs text-gray-500 mt-1">Total</div>
        </div>

        <div className="card p-6">
          <div className="text-sm text-gray-600 font-medium">🧪 Tratamientos</div>
          <div className="text-3xl font-bold text-gray-900 mt-2">{treatments.length}</div>
          <div className="text-xs text-gray-500 mt-1">Configurados</div>
        </div>

        <div className="card p-6">
          <div className="text-sm text-gray-600 font-medium">🔬 Réplicas</div>
          <div className="text-3xl font-bold text-gray-900 mt-2">
            {experiment.replicasPerTreatment}
          </div>
          <div className="text-xs text-gray-500 mt-1">Por tratamiento</div>
        </div>

        <div className="card p-6">
          <div className="text-sm text-gray-600 font-medium">📅 Duración</div>
          <div className="text-3xl font-bold text-gray-900 mt-2">{experiment.duration}</div>
          <div className="text-xs text-gray-500 mt-1">Días</div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Información del experimento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-600 font-medium">Organismo</div>
            <div className="text-gray-900 mt-1">{experiment.organism}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 font-medium">Microorganismo</div>
            <div className="text-gray-900 mt-1">{experiment.microorganism}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 font-medium">Fecha de inicio</div>
            <div className="text-gray-900 mt-1">{experiment.startDate.toLocaleDateString()}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 font-medium">Total de plantas</div>
            <div className="text-gray-900 mt-1">{experiment.totalPlants}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
