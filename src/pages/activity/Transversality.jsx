import React, { useState } from 'react'
import { useSelectedValues } from '../../provider/context'
import { ArrayInput, SimpleFormIterator, ReferenceInput, SelectInput } from 'react-admin'

export default props => {
  let [{ workplanId, areaId, lineId, objectiveId, actionId }] = useSelectedValues()
  let [transversality, setTransversality] = useState({
    workplanId,
    areaId,
    lineId,
    objectiveId,
    actionId
  })

  return (
    <ArrayInput source='transversality' label='Transversalidad'>
      <SimpleFormIterator>
        <ReferenceInput
          reference='areas'
          source='areaId'
          label='Area'
          perPage={500}
          filter={{ workplanId: transversality.workplanId }}
          onChange={event => setTransversality({ ...transversality, areaId: event.target.value })}
        >
          <SelectInput optionText='name' />
        </ReferenceInput>
        <ReferenceInput
          reference='lines'
          source='lineId'
          label='Linea'
          perPage={500}
          filter={{ areaId: transversality.areaId }}
          onChange={event => setTransversality({ ...transversality, lineId: event.target.value })}
        >
          <SelectInput optionText='name' />
        </ReferenceInput>
        <ReferenceInput
          reference='objectives'
          source='objectiveId'
          label='Objetivo'
          perPage={500}
          filter={{ lineId: transversality.lineId }}
          onChange={event =>
            setTransversality({ ...transversality, objectiveId: event.target.value })
          }
        >
          <SelectInput optionText='name' />
        </ReferenceInput>
        <ReferenceInput
          reference='actions'
          source='actionId'
          label='Acción'
          perPage={500}
          filter={{ objectiveId: transversality.objectiveId }}
          onChange={event => setTransversality({ ...transversality, actionId: event.target.value })}
        >
          <SelectInput optionText='name' />
        </ReferenceInput>
      </SimpleFormIterator>
    </ArrayInput>
  )
}
