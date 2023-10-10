import {createSlice} from '@reduxjs/toolkit';
let nextEmployeeId = 1;

const employeesSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = {
        id: nextEmployeeId++,
        ...action.payload,
      };
      state.push(newEmployee);
    },
    toggleFavorite: (state, action) => {
      return state.map(employee => {
        if (employee.id == action.payload.id) {
          return {
            ...employee,
            favorite: action.payload.favorite,
          };
        }
        return employee;
      });
    },
  },
});

export const {addEmployee, toggleFavorite} = employeesSlice.actions;
export default employeesSlice.reducer;
