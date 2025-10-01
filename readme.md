# 🌸 صالون زهرة أيلول 🌸

Projet de gestion des réservations pour un salon de beauté avec suivi des services et des ventes de Beauty Blender.

---

## 📌 Description
Cette application web permet de :  
- Enregistrer les réservations des clientes.  
- Gérer les services proposés avec leur prix et spécialiste assigné.  
- Confirmer les services effectués et suivre leur statut.  
- Suivre les ventes de Beauty Blender par mois.  
- Ajouter ou supprimer des spécialistes et visualiser leurs statistiques.  
- Tout est sauvegardé dans **Supabase** (backend gratuit).  

Le projet est conçu pour être accessible depuis n’importe quel appareil avec un navigateur.

---

## 🛠 Technologies utilisées
- **Frontend** : HTML, CSS, JavaScript  
- **Backend / Base de données** : Supabase (PostgreSQL + Auth)  
- **Librairie JS** : [Supabase JS](https://supabase.com/docs/reference/javascript/introduction)

---

## ⚙️ Installation / Usage
1. Télécharger ou cloner le projet.  
2. Ouvrir `index.html` dans un navigateur.  
3. Ajouter tes informations Supabase dans `scripts.js` :

```javascript
const supabaseUrl = "VOTRE_SUPABASE_URL";
const supabaseKey = "VOTRE_SUPABASE_KEY";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
