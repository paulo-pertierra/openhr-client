import { defineStore } from "pinia";
import { reactive } from "vue";

export const useNewEmployeeDetailsStore = defineStore("newEmployeeDetails", () => {
  const employee = reactive({
    lastName: "", // Step 1
    firstName: "",
    middleName: "",

    contactEmail: "",
    contactNumber: "",

    profileGender: "", // Step 2
    profileBirthday: "",
    profileCivilStatus: "",
    profileNationality: "",
    profileAddress: "",

    educationLevel: "", // Step 3
    educationCourse: "",
    eduactionYearStart: "",
    educationYearGraduate: "",
    educationSchool: "",

    workRole: "", // Step 4
    workDepartment: "",
    workTitle: "",
    workCode: "",
    workEmploymentType: "",
    workHireDate: ""

    // Step 5: Generate username and password, upload.
  });
});
