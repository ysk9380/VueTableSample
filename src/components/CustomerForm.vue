<template>
  <form @submit.prevent="submitForm">
    <b-form-input
      v-model="customer.firstName"
      placeholder="First Name"
    ></b-form-input>
    <b-form-input
      v-model="customer.lastName"
      placeholder="Last Name"
    ></b-form-input>
    <b-form-input v-model="customer.email" placeholder="Email"></b-form-input>
    <!-- Add more fields as needed -->
    <b-button type="submit" :disabled="!isDirty">Submit</b-button>
  </form>
</template>

<script>
export default {
  name: "CustomerForm",
  data() {
    return {
      customer: {
        firstName: "Aritra",
        lastName: "Roy",
        email: "Aritra@example.com",
        // Add more fields as needed
      },
      originalCustomer: null,
      isDirty: false,
    };
  },
  created() {
    // Clone the customer object
    this.originalCustomer = { ...this.customer };
  },
  watch: {
    customer: {
      handler() {
        this.isDirty =
          JSON.stringify(this.customer) !==
          JSON.stringify(this.originalCustomer);
      },
      deep: true,
    },
  },
  methods: {
    submitForm() {
      if (this.isDirty) {
        console.log("Form submitted", this.customer);
      }
    },
  },
};
</script>
