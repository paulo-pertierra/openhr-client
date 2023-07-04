<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import { QrStream } from "vue3-qr-reader";
import Swal from "sweetalert2";

const uuidRegExPattern =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

const invalidQrId = ref(false);

function onDecode(scannedString: string) {
  if (!scannedString.match(uuidRegExPattern)) {
    invalidQrId.value = true;
    setTimeout(() => {
      invalidQrId.value = false;
    }, 3000);
    return;
  }

  axios.post(`/times/${scannedString}`).then((res) => {
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You timed in successfully. Don't forget to time out!",
        timer: 1500,
        showCancelButton: false,
        showConfirmButton: false
      });
      return;
    }
  });
}
</script>

<template>
  <main>
    <div class="w-full h-full flex items-center justify-center">
      <div :class="{ shake: invalidQrId }" class="bg-white p-10 rounded-xl shadow-2xl">
        <h1 class="text-center font-semibold text-3xl p-4">Present your QR card.</h1>
        <div class="w-[400px] h-[225px] rounded-lg overflow-hidden">
          <QrStream @decode="onDecode" />
        </div>
        <div v-if="invalidQrId" class="w-full p-4 bg-red-600 rounded-lg text-white mt-2">
          The QR code is invalid.
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-image: url("/authbg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
