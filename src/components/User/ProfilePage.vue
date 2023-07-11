<script lang="ts" setup>
import { useCurrentUserProfileStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { formatISOToReadable } from '@/utilities/time';

const currentUserProfileStore = useCurrentUserProfileStore();
onMounted(() => {
  currentUserProfileStore.getCurrentUserProfileByUuid();
})

</script>

<template>
  <div>
    <div class="m-2 items-center p-4 sm:flex sm:p-8">
      <img
        :src="'https://placehold.co/40?text=' + currentUserProfileStore.user.firstName.charAt(0) + currentUserProfileStore.user.lastName.charAt(0)"
        class="mx-auto h-20 w-auto rounded-full transition-all sm:m-0 sm:h-32"
        alt=""
      />
      <div>
        <h1 class="p-2 text-center text-2xl transition-all sm:text-left sm:text-4xl">
          {{ currentUserProfileStore.user.lastName 
                 + ", " + currentUserProfileStore.user.firstName + " " 
                 + (currentUserProfileStore.user.middleName as string).charAt(0) + "." }}
        </h1>
        <h3 class="p-0 text-center sm:p-2 sm:text-left">{{ currentUserProfileStore.user.workTitle }}</h3>
      </div>
    </div>
    <div class="m-2 md:m-8 rounded-[3rem] border-2 border-solid border-purple-200">
      <h2 class="p-4 text-center text-3xl font-semibold text-purple-950">Personal Information</h2>
      <div class="grid grid-cols-1 p-4 font-semibold lg:grid-cols-2">
        <div class="col-span-1">
          <h3 class="py-2 text-2xl">Basic Information</h3>
          <table class="text-left">
            <tr>
              <th class="px-4">Gender Preference:</th>
              <td>{{ currentUserProfileStore.user.profileGender }}</td>
            </tr>
            <tr>
              <th class="px-4">Birthday:</th>
              <td>{{ formatISOToReadable(currentUserProfileStore.user.profileBirthday, 'PP') }}</td>
            </tr>
            <tr>
              <th class="px-4">Civil Status:</th>
              <td>{{ currentUserProfileStore.user.profileCivilStatus }}</td>
            </tr>
            <tr>
              <th class="px-4">Nationality:</th>
              <td>{{ currentUserProfileStore.user.profileNationality }}</td>
            </tr>
            <tr>
              <th class="px-4">Address:</th>
              <td>{{ currentUserProfileStore.user.profileAddress }}</td>
            </tr>
          </table>
        </div>
        <div class="col-span-1">
          <h3 class="py-2 text-2xl">Educational Background</h3>
          <table class="text-left">
            <tr>
              <th class="px-4">Educational Level:</th>
              <td>{{ currentUserProfileStore.user.educationLevel }}</td>
            </tr>
            <tr>
              <th class="px-4">Course/Strand:</th>
              <td>{{ currentUserProfileStore.user.educationCourse }}</td>
            </tr>
            <tr>
              <th class="px-4">Year Started:</th>
              <td>{{ currentUserProfileStore.user.educationYearStart }}</td>
            </tr>
            <tr>
              <th class="px-4">Year Graduated:</th>
              <td>{{ currentUserProfileStore.user.educationYearGraduate }}</td>
            </tr>
            <tr>
              <th class="px-4">School:</th>
              <td>{{ currentUserProfileStore.user.educationSchool }}</td>
            </tr>
          </table>
        </div>
      </div>
      <h2 class="p-4 text-center text-3xl font-semibold text-purple-950">
        Professional Information
      </h2>
      <div class="grid grid-cols-1 p-4 font-semibold lg:grid-cols-2">
        <div class="col-span-1">
          <h3 class="py-2 text-2xl">Work Information</h3>
          <table class="text-left">
            <tr>
              <th class="px-4">Department:</th>
              <td>{{ currentUserProfileStore.user.workDepartment }}</td>
            </tr>
            <tr>
              <th class="px-4">Job Title:</th>
              <td>{{ currentUserProfileStore.user.workTitle }}</td>
            </tr>
            <tr>
              <th class="px-4">Job Code:</th>
              <td>{{ currentUserProfileStore.user.workCode }}</td>
            </tr>
            <tr>
              <th class="px-4">Salary Grade:</th>
              <td>Feature: TBA</td>
            </tr>
            <tr>
              <th class="px-4">Expected Regularization Date:</th>
              <td>N/A</td>
            </tr>
            <tr>
              <th class="px-4">Immediate Supervisor:</th>
              <td>Feature: TBA</td>
            </tr>
            <tr>
              <th class="px-4">Biometric ID:</th>
              <td>Encrypted. <a href="#" class="text-purple-950">View here.</a></td>
            </tr>
          </table>
        </div>
        <!-- <div class="col-span-1">
          <h3 class="py-2 text-2xl">Government Information</h3>
          <table class="text-left">
            <tr>
              <th class="px-4">SSS ID:</th>
              <td>1234-123142</td>
            </tr>
            <tr>
              <th class="px-4">TIN ID:</th>
              <td>19234-123</td>
            </tr>
            <tr>
              <th class="px-4">PhilHealth ID:</th>
              <td>41-123191-223</td>
            </tr>
            <tr>
              <th class="px-4">HDMF Number:</th>
              <td>N/A</td>
            </tr>
            <tr>
              <th class="px-4">PRC License Number:</th>
              <td>N/A</td>
            </tr>
            <tr>
              <th class="px-4">Passport Number:</th>
              <td>Di Makalipad</td>
            </tr>
          </table>
        </div> -->
      </div>
      <!-- <h2 class="p-4 text-center text-3xl font-semibold text-purple-950">
        Trainings/Seminars Information
      </h2>
      <div class="grid grid-cols-1 p-4 font-semibold lg:grid-cols-2">
        <h3 class="col-span-2 py-2 text-2xl">Training</h3>
        <div class="col-span-2 lg:col-span-1">
          <table class="text-left">
            <tr>
              <th class="px-4">Training Name:</th>
              <td>Frontend Development Boatcamp with Herbal Remedies</td>
            </tr>
            <tr>
              <th class="px-4">Training Date:</th>
              <td>I ran out of references</td>
            </tr>
            <tr>
              <th class="px-4">Instructor/Institution:</th>
              <td>Engelbert Cruzader</td>
            </tr>
            <tr>
              <th class="px-4">Nature of Training:</th>
              <td>Herbal Medications</td>
            </tr>
          </table>
        </div>
        <div class="col-span-1 mt-8 md:mt-0">
          <table class="text-left">
            <tr>
              <th class="px-4">Returning Service Period:</th>
              <td>N/A</td>
            </tr>
            <tr>
              <th class="px-4">Corresponding Amount:</th>
              <td>Php 10,000.00</td>
            </tr>
            <tr>
              <th class="px-4">Training Cost:</th>
              <td>Php 12,000.00</td>
            </tr>
            <tr>
              <th class="px-4">Training Duration:</th>
              <td>Forever and ever and ever</td>
            </tr>
            <tr>
              <th class="px-4">Notes:</th>
              <td class="rounded-2xl border-2 border-solid">
                Huh? Idk man I don't take notes bro thats crazy Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Provident eaque maxime, officiis, reiciendis, qui odio
                et magnam velit doloribus facilis debitis. Expedita quaerat facere qui nostrum
                ducimus ipsum dolorem doloremque?
              </td>
            </tr>
          </table>
        </div>
      </div>
      <h2 class="p-4 text-center text-3xl font-semibold text-purple-950">Emergency Contact</h2> -->
      <!-- <div class="grid grid-cols-1 p-4 font-semibold lg:grid-cols-2">
        <div class="col-span-1">
          <h3 class="py-2 text-2xl">Contact Person</h3>
          <table class="text-left">
            <tr>
              <th class="px-4">Name:</th>
              <td>Peter B. Parker</td>
            </tr>
            <tr>
              <th class="px-4">Contact Information:</th>
              <td class="border-solid border-2 rounded-3xl border-black">
                <h5>Phone: 0938 146 3754</h5>
                <h5>Email: peterparker@spider.com</h5>
              </td>
            </tr>
            <tr>
              <th class="px-4">Relationship:</th>
              <td>Spiderweb Supplier</td>
            </tr>
            <tr>
              <th class="px-4">Nationality:</th>
              <td>Filipino</td>
            </tr>
            <tr>
              <th class="px-4">Nationality:</th>
              <td>143 Calbona Subd., Calbona, Laguna</td>
            </tr>
          </table>
        </div>
        <div class="col-span-1">
          <h3 class="py-2 text-2xl">Contact Person</h3>
          <table class="text-left">
            <tr>
              <th class="px-4">Name:</th>
              <td>Peter B. Parker</td>
            </tr>
            <tr>
              <th class="px-4">Contact Information:</th>
              <td class="border-solid border-2 rounded-3xl">
                <h5>Phone: 0938 146 3754</h5>
                <h5>Email: peterparker@spider.com</h5>
              </td>
            </tr>
            <tr>
              <th class="px-4">Relationship:</th>
              <td>Spiderweb Supplier</td>
            </tr>
            <tr>
              <th class="px-4">Nationality:</th>
              <td>Filipino</td>
            </tr>
            <tr>
              <th class="px-4">Nationality:</th>
              <td>143 Calbona Subd., Calbona, Laguna</td>
            </tr>
          </table>
        </div>
        <div class="col-span-1">
          <h3 class="py-2 text-2xl">Contact Person</h3>
          <table class="text-left">
            <tr>
              <th class="px-4">Name:</th>
              <td>Peter B. Parker</td>
            </tr>
            <tr>
              <th class="px-4">Contact Information:</th>
              <td class="border-solid border-2 rounded-3xl">
                <h5>Phone: 0938 146 3754</h5>
                <h5>Email: peterparker@spider.com</h5>
              </td>
            </tr>
            <tr>
              <th class="px-4">Relationship:</th>
              <td>Spiderweb Supplier</td>
            </tr>
            <tr>
              <th class="px-4">Nationality:</th>
              <td>Filipino</td>
            </tr>
            <tr>
              <th class="px-4">Nationality:</th>
              <td>143 Calbona Subd., Calbona, Laguna</td>
            </tr>
          </table>
        </div>
      </div> -->
    </div>
  </div>
</template>
