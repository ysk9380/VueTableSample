<template>
  <div class="p-3">
    <div class="mb-3">
      <b-input-group>
        <b-input-group-prepend>
          <b-icon icon="filter" scale="1.25"></b-icon>
        </b-input-group-prepend>
        <b-form-input
          v-model="filter"
          placeholder="Filter customers"
        ></b-form-input>
      </b-input-group>
    </div>
    <b-table
      :items="filteredCustomers"
      :fields="fields"
      :tbody-tr-class="rowClass"
    >
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
  </div>
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
      filter: "",
      customers: [
        {
          id: 1,
          firstName: "John",
          lastName: "Smith",
          address: "123 Main St",
          email: "john@example.com",
          phoneNumber: "123-456-7890",
          isDeleted: false,
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Doe",
          address: "456 Elm St",
          email: "jane@example.com",
          phoneNumber: "234-567-8901",
          isDeleted: false,
        },
        {
          id: 3,
          firstName: "Jim",
          lastName: "Doe",
          address: "789 Pine St",
          email: "jim@example.com",
          phoneNumber: "345-678-9012",
          isDeleted: false,
        },
        {
          id: 4,
          firstName: "Alice",
          lastName: "Johnson",
          address: "123 Oak St",
          email: "alice@example.com",
          phoneNumber: "456-789-0123",
          isDeleted: false,
        },
        {
          id: 5,
          firstName: "Bob",
          lastName: "Brown",
          address: "456 Maple St",
          email: "bob@example.com",
          phoneNumber: "567-890-1234",
          isDeleted: false,
        },
        {
          id: 6,
          firstName: "Charlie",
          lastName: "Davis",
          address: "789 Birch St",
          email: "charlie@example.com",
          phoneNumber: "678-901-2345",
          isDeleted: false,
        },
        {
          id: 7,
          firstName: "David",
          lastName: "Evans",
          address: "123 Cedar St",
          email: "david@example.com",
          phoneNumber: "789-012-3456",
          isDeleted: false,
        },
        {
          id: 8,
          firstName: "Eve",
          lastName: "Foster",
          address: "456 Fir St",
          email: "eve@example.com",
          phoneNumber: "890-123-4567",
          isDeleted: false,
        },
        {
          id: 9,
          firstName: "Frank",
          lastName: "Green",
          address: "789 Pine St",
          email: "frank@example.com",
          phoneNumber: "901-234-5678",
          isDeleted: false,
        },
        {
          id: 10,
          firstName: "Grace",
          lastName: "Harris",
          address: "123 Elm St",
          email: "grace@example.com",
          phoneNumber: "012-345-6789",
          isDeleted: false,
        },
      ],
      deleted: [],
      fields: [
        { key: "actions", label: "Actions" },
        { key: "id", label: "ID" },
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "address", label: "Address" },
        { key: "email", label: "Email" },
        { key: "phoneNumber", label: "Phone Number" },
      ],
    };
  },
  computed: {
    filteredCustomers() {
      const searchParameters = this.filter.toLowerCase().split(" ");
      return this.customers.filter((customer) =>
        searchParameters.every((parameter) =>
          Object.values(customer).some((value) =>
            value.toString().toLowerCase().includes(parameter)
          )
        )
      );
    },
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
  color: white;
}
.p-3 {
  padding: 1rem;
}
.mb-3 {
  margin-bottom: 1rem;
}
</style>
