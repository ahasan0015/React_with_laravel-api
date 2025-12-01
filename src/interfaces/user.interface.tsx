export interface User {
  id?: number;           // Optional for new users
  name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  role_id?: number;
  photo?: string | null;
  password?: string;     // Optional when editing
  email_verified_at?: string | null;
  created_at?: string;
  updated_at?: string;
}


const userDefault: User = {
  id: undefined,
  name: "",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  role_id: undefined,
  photo: null,
  password: "",
  email_verified_at: null,
  created_at: "",
  updated_at: "",
};

export default userDefault;
