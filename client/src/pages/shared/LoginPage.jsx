// import React , { useState }from 'react'
// import { useNavigate } from "react-router-dom";
// import { userLogin } from '../../services/UserService';

// function LoginPage() {
//       const [isDarkMode, setIsDarkMode] = useState(false);
    
//       const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode);
//       };
//       const navigate = useNavigate();

//       const navigateToSignup = () => {
//         navigate("/signup");
//       };
//       const [values, setvalues] = useState({
//         email: '',
//         password: ''
//       });
//       const onSubmit = (e) => {
//         userLogin(values).then((res) => {
//           console.log("Login success:", res.data);
//           navigate('/')
  
//         }).catch((err) => {
//           console.log(err);
//       })
//         e.preventDefault(); 
//         console.log(values,"values");
//       };
    
//       return (
//         <div
//           className={`min-h-screen ${
//             isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
//           } flex items-center justify-center`}
//         >
        
//           <div className="absolute top-4 right-4">
//             <button
//               onClick={toggleTheme}
//               className={`px-4 py-2 rounded-lg ${
//                 isDarkMode
//                   ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
//                   : "bg-blue-500 text-white hover:bg-blue-600"
//               }`}
//             >
//               {isDarkMode ? "Light Mode" : "Dark Mode"}
//             </button>
//           </div>
    
//           <div
//             className={`${
//               isDarkMode ? "bg-gray-700" : "bg-white"
//             } rounded-lg shadow-lg p-8 transition-all duration-300 transform hover:scale-105 ${
//               isDarkMode ? "hover:ring-4 hover:ring-blue-500" : ""
//             }`}
//             style={{
//               width: "50vw",
//             }}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="flex flex-col justify-center">
//                 <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
//                 <p className="mb-4">
//                   Don't have an account yet? No worries! Click the button below to sign up and join us.
//                 </p>
//                 <button onClick={navigateToSignup}
//                   className={`px-4 py-2 rounded-lg ${
//                     isDarkMode
//                       ? "bg-blue-500 text-white hover:bg-blue-600"
//                       : "bg-blue-500 text-white hover:bg-blue-600"
//                   }`}
//                 >
//                   Sign Up
//                 </button>
//               </div>
    
//               {/* Right Section */}
//               <div className="flex flex-col justify-center">
//                 <h2 className="text-2xl font-semibold mb-4">Login</h2>
//                 <form className="space-y-4" onSubmit={onSubmit}>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                         name="email" onChange={(e) => setvalues({ ...values, [e.target.name]: e.target.value })}
//                       className={`w-full p-2 border rounded-lg ${
//                         isDarkMode
//                           ? "bg-gray-600 text-white border-gray-500 focus:ring-blue-400 focus:border-blue-400"
//                           : "text-gray-700 focus:ring-blue-500 focus:border-blue-500"
//                       }`}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="password" className="block text-sm font-medium">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       id="password"
//                         name="password" onChange={(e) => setvalues({ ...values, [e.target.name]: e.target.value })}
//                       className={`w-full p-2 border rounded-lg ${
//                         isDarkMode
//                           ? "bg-gray-600 text-white border-gray-500 focus:ring-blue-400 focus:border-blue-400"
//                           : "text-gray-700 focus:ring-blue-500 focus:border-blue-500"
//                       }`}
//                     />
//                   </div>
//                   <button
//                     type="submit" 
//                     className={`w-full px-4 py-2 rounded-lg ${
//                       isDarkMode
//                         ? "bg-blue-500 text-white hover:bg-blue-600"
//                         : "bg-blue-500 text-white hover:bg-blue-600"
//                     }`}
//                   >
//                     Login
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//   )
// }

// export default LoginPage
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/user/login', {
        email,
        password,
      },{
        withCredentials: true, 
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      });

      setMessage('Login successful!');
      console.log(res.data); 
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Login failed!';
      setMessage(errorMsg);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
        {message && <p style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Login;
