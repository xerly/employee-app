import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventParameter = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        formate="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) =>
          onChange(convertToDefaultEventParameter(name, date))
        }
      />
    </MuiPickersUtilsProvider>
  );
}
