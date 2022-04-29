<template>
    <!-- Registration Form -->
    <div class="text-white text-center font-bold p-5 mb-4"
    v-if="reg_show_alert" :class="reg_alert_variant">
    {{ reg_alert_msg }}
    </div>
    <vee-form :validation-schema="schema"
    @submit="register" :initial-values="userData">
    <!-- Name -->
    <div class="mb-3">
        <label for="name">
        <span class="mb-2 inline-block">Name</span>
        <vee-field type="text" name="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name" id="name" />
        </label>
        <ErrorMessage class="text-red-600" name="name" />
    </div>
    <!-- Email -->
    <div class="mb-3">
        <label for="email">
        <span class="mb-2 inline-block">Email</span>
        <vee-field type="email" name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email" id="email"/>
        </label>
        <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Age -->
    <div class="mb-3">
        <label for="age">
        <span class="mb-2 inline-block">Age</span>
        <vee-field type="number" name="age"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Age" id="age"/>
        </label>
        <ErrorMessage class="text-red-600" name="age" />
    </div>
    <!-- Password -->
    <div class="mb-3">
        <label for="password">
        <span class="mb-2 inline-block">Password</span>
        <vee-field  name="password"
            :bails="false" v-slot="{field, errors}">
        <input type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password" id="password" v-bind="field" />
        <div class="text-red-600" v-for="error in errors" :key="error">
            {{ error }}
        </div>
        </vee-field>
        </label>
        <ErrorMessage class="text-red-600" name="password" />
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
        <label for="con_password">
        <span class="mb-2 inline-block">Confirm Password</span>
        <vee-field type="password" name="confirm_password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password" id="con_password"/>
        </label>
        <ErrorMessage class="text-red-600" name="confirm_password" />
    </div>
    <!-- Country -->
    <div class="mb-3">
        <label for="country">
        <span class="mb-2 inline-block">Country</span>
        <vee-field as="select" name="country"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded" id="country">
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Antartica">Antartica</option>
        </vee-field>
        </label>
        <ErrorMessage class="text-red-600" name="country" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
        <label for="tos">
        <vee-field type="checkbox" name="tos" value="1"
            class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
        Accept terms of service</label>
        <ErrorMessage class="text-red-600 block" name="tos" />
    </div>
    <button type="submit"
        :disabled="reg_in_submission"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
        hover:bg-purple-700">
        Submit
    </button>
    </vee-form>
</template>

<script>

export default {
  name: 'RegisterForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:3|max:100',
        confirm_password: 'password_mismatch:@password',
        country: 'required|country_excluded:Antartica',
        tos: 'tos',
      },
      userData: {
        country: 'USA',
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait! Your Account is being created.',
    };
  },
  methods: {
    register() {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = 'bg-blue-500';
      this.reg_alert_msg = 'Please wait! Your Account is being created.';

      // dummy success message
      this.reg_alert_variant = 'bg-green-500';
      this.reg_alert_msg = 'Success! Your account has been created';
    },
  },
};
</script>
