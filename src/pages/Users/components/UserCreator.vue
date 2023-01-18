<template>
  <Card class="user-creation-card flex justify-content-center shadow-8">
    <template #title class="flex justify-content-center">
      Create new user</template
    >
    <template #content>
      <span class="p-float-label mt-5">
        <InputText
          id="firstName"
          type="text"
          v-model="v$.firstName.$model"
          :class="{ 'p-invalid': v$.firstName.$invalid && dataSubmitted }"
        />
        <label for="firstName">Firstname</label>
      </span>
      <span class="p-float-label mt-5">
        <InputText
          id="lastName"
          type="text"
          v-model="v$.lastName.$model"
          :class="{ 'p-invalid': v$.lastName.$invalid && dataSubmitted }"
        />
        <label for="lastName">Lastname</label>
      </span>
      <span class="p-float-label mt-5">
        <InputNumber
          id="age"
          v-model="newUser.age"
          mode="decimal"
          :useGrouping="false"
          :min="0"
          :max="100"
        />
        <label for="age">Age</label>
      </span>
      <span class="p-float-label mt-5">
        <InputText id="phone" type="text" v-model="newUser.phone" />
        <label for="phone">Phone</label>
      </span>
      <span class="p-float-label mt-5 flex justify-content-center">
        <Button
          label="Add"
          class="p-button-outlined p-button-success mr-1"
          @click="storeUser(!v$.$invalid)"
        />
        <Button
          label="Clear"
          class="p-button-outlined p-button-danger ml-1"
          @click="resetForm"
        />
      </span>
      <span class="p-float-label mt-2 flex justify-content-center">
        <Button
          label="Add random user"
          class="p-button-outlined p-button-primary"
          @click="userStore.addRandomUser"
        />
      </span>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import { reactive, ref } from 'vue'
import { useUsersStore } from '@/store/modules/users'
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import type { UserDataInterface } from '@/store/interfaces/interfaces'
import { useToast } from 'primevue/usetoast'

const dataSubmitted = ref(false)
const userStore = useUsersStore()
const toast = useToast()

const storeUser = (isDataValid: boolean) => {
  dataSubmitted.value = true

  if (!isDataValid) {
    return
  }

  userStore.addUser(newUser)
  showToast()
  resetForm()
}

const newUser: UserDataInterface = reactive({
  firstName: '',
  lastName: '',
  age: null,
  phone: null,
})

const rules = {
  firstName: { required },
  lastName: { required },
}

const v$ = useVuelidate(rules, newUser)

const resetForm = () => {
  newUser.firstName = ''
  newUser.lastName = ''
  newUser.age = null
  newUser.phone = null
  dataSubmitted.value = false
}

const showToast = () => {
  toast.add({
    severity: 'success',
    summary: 'New notification',
    detail: 'User successfully saved to storage',
    group: 'bottom-left',
    life: 3000,
  })
}
</script>

<style lang="scss">
.user-creation-card {
  width: fit-content;

  .p-card-title {
    display: flex;
    justify-content: center;
  }
}
</style>
