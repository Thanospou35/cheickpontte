const mongoose = require('mongoose');
require ("dotenv").config();
const User = require('./user');
(async function() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connexion réussie avec succes');
        /*const user = new User({
            nom: "Gaye",
            prenom: "Omar",
            email: "omar2@yahoo.com",
            age: 27,
            favoriteFoods: ["thiéb", "mafé"],
        });

        const user2 = new User({
            nom: "sarr",
            prenom: "Aly",
            email: "Aly3@gmail.com",
            age: 65,
            favoriteFoods: ["yassa", "domoda"],
        });
        const user3 = new User({
            nom: "sarr",
            prenom: "Assane",
            email: "Assane@gmail.com",
            age: 65,
            favoriteFoods: ["yassa", "domoda"],
        });
        //const result = await user.save();
        //const result2 = await user2.save();
        const result3 = await user3.save();
        //console.log(result);
        //console.log(result2);
        console.log(result3);*/

        /*const user1 = await User.create({
            nom: "Ndiaye",
            prenom: "Mbaye",
            email: "mbaye250@gmail.com",
            age: 50,
            favoriteFoods: ["mbaxal", "soupe"], 
        });

        const user2 = await User.create({
            nom: "Diouf",
            prenom: "Malick",
            email: "diouf158@gmail.com",
            age: 40,
            favoriteFoods: ["pizza", "shanduiwch"],  
        });*/

        //pour insérer plusieur personne
        /*const user = await User.insertMany([
            {nom: "sagne", prenom: "Khady", email: "sagne@gmail.com", age: 19, favoriteFoods: ["yassa", "domoda"]},
            {
            nom: "Kara",
            prenom: "Makhou",
            email: "kara002@gmail.com",
            age: 40,
            favoriteFoods: ["kandia", "bueger"],
            },     
        ]);*/
        //afficher par id
        /*const user = await User.findById("67857a36c9bdbda4ddab22b7");
        console.log(user);

        // afficher les age entre 18 et 25
        /*const user = await User.find({
            age: { $gte: 18, $lte: 25 } 
          });
          console.log(user);*/

          //affiche eleve qui on 25 ou 27
        /*const user = await User.find({
        age: { $in: [25, 27] } 
        });
        console.log(eleve);*/

        //affcicher l'eleve qui a 18 ans
        /*const user = await User.find({ age: 18 });
        console.log(user);*/

        // Exécuter la récupération de tous les utilisateurs
       /* const allUsers = await User.find().exec();
        console.log(allUsers);*/
        
        // Récupérer les utilisateurs ayant un âge entre 20 et 80
       /* const usersBetween20And80 = await User.find()
            .where("age")
            .lt(50)
            .gt(19); // Afficher les âges entre 20 et 80
            console.log(usersBetween20And80);*/
            

        // Récupérer les utilisateurs avec le nom "Makhou kara"
        /*const usersNamedModouFaye = await User.find()
            .where("nom","prenom")
            .equals("Makhou Kara"); // Afficher les noms correspondant à "MODOU FAYE"
            console.log(usersNamedModouFaye);*/
            
        // Récupérer les utilisateurs ayant un âge de 40 ou 65
        /*const usersWithAge40Or65  = await User.find()
            .or([{ age: 40 }, { age: 65 }]); // Conditions "ou" pour les âges
            console.log(usersWithAge40Or65);
        // Vérifier si un utilisateur avec l'âge 65 existe
        const userExistsWithAge20 = await User.exists({ age: 65 }); // Vérifier l'existence d'un utilisateur
        console.log(userExistsWithAge20);
        
        // Limiter les résultats à 2 et sélectionner les champs "nom" et "age"
        const limitedUsers = await User.find()
            .limit(2)
            .select("nom age"); // Limiter et sélectionner uniquement "nom" et "age"
            console.log(limitedUsers);*/

            /*const userate = await User.findOneAndUpdate(
                { nom: "Diouf", prenom: "Malick" }, // Condition pour trouver la personne
                { $push: { favoriteFoods: "Hamburger" } }, // Ajout de "Hamburger" dans la liste
                { new: true } // Option pour retourner le document mis à jour
            );
    
            if (!userate) {
                console.log("Utilisateur introuvable ou n'existe pas");
            } else {
                console.log("Utilisateur mis à jour :", userate);
            }*/
            //Mettre à jour l'âge d’une personne
           /*const usser = await User.findOneAndUpdate(
            { prenom: "Khady", nom: "sagne" }, // Condition pour trouver la personne
            { $inc: { age: 26 } }, // Incrémenter l'âge de 50 ans
            { new: true } // Option pour retourner le document mis à jour
        );
        console.log(usser);*/

        // Utilisez findByIdAndDelete à la place de findByIdAndRemove
        /*const deletedUser = await User.findByIdAndDelete('67857a36c9bdbda4ddab22b7');

        if (deletedUser) {
            console.log("Utilisateur supprimé :", deletedUser);
        } else {
            console.log("Utilisateur introuvable avec cet ID");
        }*/

        /*const userDelete = await User.deleteMany({ prenom: "Modou" }); // Supprime tous les documents où nom = "MODOU"
        console.log(userDelete);*/
        

        

    } catch (error) {
        console.log(error.message);
    }
})();
