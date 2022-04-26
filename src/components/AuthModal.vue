<template>
<!-- Auth Modal -->
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
  :class="{ hidden : !authModalShow }">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50"
              @click.prevent="toggleAuthModal"
              @keyup.esc="toggleAuthModal">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition" href="#" @click.prevent="tab = 'login'"
                :class="{
                  'hover:text-white text-white bg-blue-600' : tab === 'login',
                  'hover:text-blue-600' : tab === 'register'
                   }">Login</a>
            </li>
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition"
                href="#" @click.prevent="tab = 'register'"
                :class="{
                  'hover:text-white text-white bg-blue-600' : tab === 'register',
                  'hover:text-blue-600' : tab === 'login'
                   }"
                >Register</a>
            </li>
          </ul>

          <!-- Login Form -->
          <form v-show="tab === 'login'">
            <!-- Email -->
            <div class="mb-3">
              <label for="login_email">
                <span class="mb-2 inline-block">Email</span>
              <input type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
              </label>
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label for="login_password">
                <span class="mb-2 inline-block">Password</span>
              <input type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password" />
              </label>
            </div>
            <button type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700">
              Submit
            </button>
          </form>
          <!-- Registration Form -->
          <vee-form v-show="tab === 'register'" :validation-schema="schema"
           @submit="register" >
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
              <vee-field type="password" name="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password" id="password"/>
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
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700">
              Submit
            </button>
          </vee-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'AuthModal',
  data() {
    return {
      tab: 'login',
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:3|max:100',
        confirm_password: 'confirmed:@password',
        country: 'required|excluded:Antartica',
        tos: 'required',
      },
    };
  },
  computed: {
    // ...mapState({
    //   modal: 'authModalShow',
    // }),
    ...mapState(['authModalShow']),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    register(values) {
      console.log(values);
    },
  },
};
</script>
