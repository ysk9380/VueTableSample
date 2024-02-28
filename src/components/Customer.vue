<template>
  <b-table :items="customers" :fields="fields" :tbody-tr-class="rowClass">
    <template v-slot:cell(actions)="data">
      <b-button
        v-if="!data.item.isDeleted"
        variant="danger"
        @click="deleteRow(data.item)"
      >
        <b-icon icon="trash-fill"></b-icon>
      </b-button>
      <b-button v-else variant="info" @click="undoDelete(data.item)">
        <b-icon icon="arrow-counterclockwise"></b-icon>
      </b-button>
    </template>
  </b-table>
</template>
<script>
import { BTable, BButton, BIcon } from "bootstrap-vue";

export default {
  name: "Customer",
  components: {
    BTable,
    BButton,
    BIcon,
  },
  data() {
    return {
      customers: [
        // Add customer data with id, firstName, lastName and isDeleted
        { id: 1, firstName: "John", lastName: "Doe", isDeleted: false },
        { id: 2, firstName: "Jane", lastName: "Doe", isDeleted: false },
        { id: 3, firstName: "Jim", lastName: "Doe", isDeleted: false },
      ],
      deleted: [],
      fields: [
        { key: "actions", label: "Actions" },
        { key: "id", label: "ID" },
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
      ],
    };
  },
  methods: {
    deleteRow(item) {
      item.isDeleted = true;
      this.deleted.push(item);
    },
    undoDelete(item) {
      item.isDeleted = false;
      this.deleted = this.deleted.filter((deletedItem) => deletedItem !== item);
    },
    rowClass(item) {
      console.log(item);
      return item.isDeleted ? "bg-red" : "";
    },
  },
};
</script>

<style>
.bg-red {
  background-color: red;
}
</style>
