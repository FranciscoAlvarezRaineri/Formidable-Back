module.exports = {
  NAME: "formidable",
  PORT: 8000,
  DB_HOST: "formidable",
  SECRET: process.env.SECRET || "formidable",
};


// export default function SignIn() {
//   const classes = useStyles();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [remember, setRemember] = useState(false) // para ser usado cuando codiemo permanencia.
//   const [cookie, setCookie] = useCookies(["user"])

   
//   const logIn = async () => {
//     try {
//       const response = await axios
//       .post("/users/login", { email, password }, {withCredentials:true}) //handle API call to sign in here.
//       const data = response.data
//       Router.push("/forms");
//       setCookie("user", JSON.stringify(data), {
//         path: "/",
//         maxAge: 3600, // Expires after 1hr
//         sameSite: true,
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }