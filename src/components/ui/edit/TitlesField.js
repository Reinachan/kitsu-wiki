import React, { useContext } from 'react';
import EditProvider, { EditContext } from './EditProvider';
import EditField from './EditField';
import InputField from './InputField';
import ArrayField from './ArrayField';
import MapField from './MapField';

const TitlesField = ({ readOnly, field, validate }) => {
  const {
    state: {
      value: { [field]: value }
    },
    dispatch
  } = useContext(EditContext);

  return (
    <EditField field={field}>
      <div id={field}>
        <EditProvider field={field} value={value} dispatch={dispatch}>
          <InputField field="canonical" type="text" readOnly={readOnly} />
          <ArrayField field="alternatives" type="text" />
          <MapField field="localized" type="text" />
        </EditProvider>
      </div>
    </EditField>
  );
};

export default TitlesField;
