//const express = require("express");
const { collection, getDocs, doc, getDoc } = require("firebase/firestore");
const { db, loggedUser } = require("../firebase");

/*
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("BarkBark Rest API listening on port &{port}");
});


app.get("/", async (req, res) => {
    res.json({status: "Bienvenido al API de Login"});
});

app.get("/usuarios", async (req, res) => { //Obtener listado de usuarios
    const querySnapshot = await getDocs(collection(db, "users"));
    res.json({users: querySnapshot.docs.map(doc => doc.data())});
});

app.get("/usuarios/:user", async (req, res) => { //Obtener un usuario usando como parametro su UID
    const user = req.params.user;
    try {

        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);

        return res.json({
            ok: true,
            usuario: docSnap.data()
        });
    } catch (error) {
        return res.json({
            ok:false,
            errors: [
                "Algo salio mal"
            ]
        });
    }
   
});

app.get("/usuarios/currentUser", async (req,res) => { //Obtener el usuario actualmente autenticado
    return res.json({
        currentUser: loggedUser
    });
});

app.get("/usuarios/currentUID", async (req,res) => { //Obtener el UID del usuario actualmente autenticado
    return res.json({
        currentUID: loggedUser.uid
    });
});*/

const getUsuario = async (req, res) => { //Obtener el usuario usando su UID
    const user = req.params.user;
    try {

        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);

        return res.json({
            ok: true,
            usuario: docSnap.data()
        });
    } catch (error) {
        return res.json({
            ok:false,
            errors: [
                "Algo salio mal"
            ]
        });
    }
};

const getCurrentUser = async (req, res) => {
    return res.json({
        currentUser: loggedUser
    });
};

const getCurrentUserUID = async (req, res) => { //Obtener el UID del usuario actualmente autenticado
    return res.json({
        currentUID: loggedUser.uid
    });
};

const listadoUsuarios = async(req, res) => { //Obtener el listado de usuarios registrados
    const querySnapshot = await getDocs(collection(db, "users"));
    res.json({users: querySnapshot.docs.map(doc => doc.data())});
};

module.exports = {
    getUsuario,
    getCurrentUser,
    getCurrentUserUID,
    listadoUsuarios,
};