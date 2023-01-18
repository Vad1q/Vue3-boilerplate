<template>
  <Card class="user-list-card flex justify-content-center shadow-8">
    <template #title class="flex justify-content-center"> User list</template>
    <template #content>
      <Listbox
        :options="orderedUsers"
        :multiple="true"
        :filter="true"
        optionLabel="fullName"
        listStyle="height: 350px"
        style="width: 20rem"
        filterPlaceholder="Search"
      >
        <template #option="slotProps">
          <div class="flex flex-row">
            <i class="pi pi-user" style="font-size: 2rem"></i>
            <div class="ml-3 flex flex-column">
              <span class="text-lg font-semibold">{{
                slotProps.option.fullName
              }}</span>
              <span class="text-base"
                >{{
                  slotProps.option.age ? `${slotProps.option.age} y.o.` : ''
                }}
              </span>
              <span class="text-sm font-italic">{{
                slotProps.option.phone
              }}</span>
            </div>
            <div class="ml-auto">
              <Button
                icon="pi pi-times"
                class="p-button-rounded p-button-danger p-button-text p-button-sm"
                @click="removeUser(slotProps.option.id)"
              />
            </div>
          </div>
        </template>
      </Listbox>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import { useUsersStore } from '@/store/modules/users'
import { storeToRefs, mapActions } from 'pinia'
import Listbox from 'primevue/listbox'

const userStore = useUsersStore()
const { orderedUsers } = storeToRefs(userStore)
const { removeUser } = mapActions(useUsersStore, ['removeUser'])
</script>

<style lang="scss">
.user-list-card {
  width: fit-content;

  .p-card-title {
    display: flex;
    justify-content: center;
  }
}

.p-listbox-empty-message {
  text-align: center;
}
</style>
