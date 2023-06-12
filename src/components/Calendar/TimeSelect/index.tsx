import { Select } from "../../Global/Select";

interface TimeSelectProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TimeSelect = ({ value, onChange }: TimeSelectProps) => {
  return (
    <Select width="8rem" height="2.5rem" value={value} onChange={onChange}>
      <option value="01:00">1:00 AM</option>
      <option value="02:00">2:00 AM</option>
      <option value="03:00">3:00 AM</option>
      <option value="04:00">4:00 AM</option>
      <option value="05:00">5:00 AM</option>
      <option value="06:00">6:00 AM</option>
      <option value="07:00">7:00 AM</option>
      <option value="08:00">8:00 AM</option>
      <option value="09:00">9:00 AM</option>
      <option value="10:00">10:00 AM</option>
      <option value="11:00">11:00 AM</option>
      <option value="12:00">12:00 PM</option>
      <option value="13:00">1:00 PM</option>
      <option value="14:00">2:00 PM</option>
      <option value="15:00">3:00 PM</option>
      <option value="16:00">4:00 PM</option>
      <option value="17:00">5:00 PM</option>
      <option value="18:00">6:00 PM</option>
      <option value="19:00">7:00 PM</option>
      <option value="20:00">8:00 PM</option>
      <option value="21:00">9:00 PM</option>
      <option value="22:00">10:00 PM</option>
      <option value="23:00">11:00 PM</option>
      <option value="00:00">12:00 AM</option>
    </Select>
  );
};
