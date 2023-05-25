// import { Autocomplete } from "@mui/material";
// import React from "react";
// export default function MuiAutoComplete() {
//     return (
//         <Autocomplete
//             id="device-type"
//             multiple
//             open={isOpenDeviceTypeDropdown}
//             options={deviceTypeOptions}
//             onChange={(e, value) => {
//                 setFilterDeviceType(value);
//             }}
//             value={filterDeviceType}
//             size="small"
//             popupIcon={""}
//             disableCloseOnSelect
//             sx={{
//                 width: "15rem",
//                 border: "1px solid #034A93",
//                 borderRadius: "6px",
//                 height: "42px",
//                 "& .MuiAutocomplete-inputRoot": {
//                     flexWrap: "nowrap",
//                     cursor: "none",
//                     padding: "6px 0 !important",
//                 },
//                 "& .Mui-focused": {
//                     border: "none",
//                 },
//             }}
//             isOptionEqualToValue={(option: AssociatedType, value: AssociatedType) =>
//                 option.name === value.name
//             }
//             getOptionLabel={(option) => option.name}
//             renderOption={(props, option, { selected }) => {
//                 return (
//                     <li {...props}>
//                         <Checkbox
//                             icon={icon}
//                             checkedIcon={checkedIcon}
//                             style={{ marginRight: 8 }}
//                             checked={selected}
//                         />
//                         {option.name}
//                     </li>
//                 );
//             }}
//             renderInput={(params: AutocompleteRenderInputParams) => (
//                 <TextField
//                     {...params}
//                     placeholder={filterDeviceType.length >= 1 ? "" : "Device Type"}
//                     sx={{
//                         "input::placeholder": {
//                             opacity: 1,
//                             color: "#000A14 !important",
//                             fontWeight: 400,
//                             fontSize: "16px",
//                             textAlign: "center",
//                         },
//                         "& .Mui-focused": {
//                             border: "none",
//                         },
//                     }}
//                 />
//             )}
//             renderTags={renderTags}
//             data-testid="autocomplete-select-device"
//         />
//     )
// }
