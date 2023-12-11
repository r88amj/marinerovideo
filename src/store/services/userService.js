// User.js
export const User = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    avatar_url: '',
    display_name: '',
    need_update_pw: 0,
    boatsWishlist: [],
    toursWishlist: [],
    birthday: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zip_code: 0,
    address: '',
    address2: '',
  };
  
  // Credentials.js
  export const Credentials = {
    email: '',
    password: '',
  };
  
  // AuthResponse.js
  export const AuthResponse = {
    token: '',
    user: User,
    status: 0,
  };
  
  // AuthErrorResponse.js
  export const AuthErrorResponse = {
    code: '',
    status: 0,
    message: '',
  };
  
  // Register.js
  export const Register = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    term: false,
  };
  
  // RegisterResponse.js
  export const RegisterResponse = {
    message: '',
    status: false,
  };
  
  // Wishlist.js
  export const Wishlist = {
    data: null,
    total: 0,
    total_pages: 0,
    status: 0,
  };
  