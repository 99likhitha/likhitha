import Image from "next/image";
// import RecipeCard from "./RecipeCard";


const recipes=[
  {id:1,title:"Butter Chicken", description:"Famous indian receipe"},
  {id:1,title:"Gulab Jamun", description:"Famous indian sweet"},
  {id:1,title:"Biryani", description:"Made of chicken,rice,spices"},
]



import Head from 'next/head';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Page</title>
        <meta name="description" content="A simple recipe page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Recipes</h1>

        <div className={styles.recipeContainer}>
          <RecipeCard 
            title="Gulab Jamun" 
            description="A classic indian dessert" 
            process="1. Make the dough
Knead flour, khoya, baking powder, and clarified butter (ghee) into a firm but not too dry or sticky dough. You can also add a small amount of vinegar to make the gulab jamun softer and airier. 
2. Shape the dough balls
Let the dough rest, then gently divide it into equal portions and shape into smooth balls. The dough balls will expand while frying and soaking in syrup, so make them small. 
3. Fry the dough balls
Traditionally, ghee is used for frying, but you can also use oil or add some ghee to the oil. The oil should be hot enough but not too hot. Test the oil with a small piece of dough to make sure it rises slowly without darkening. Fry the dough balls until they are golden brown. 
4. Soak the dough balls in syrup
Transfer the fried dough balls to a pot of warm, simmering sugar syrup. Swirl the pot to coat the dough balls, then cover and let them sit for at least 30 minutes. The dough balls will soak up the syrup, soften, and increase in size. "
          />
          <RecipeCard 
            title="Butter Chicken" 
            description="A flavorful dish with chicken in a mild sauce ." 
            process="Gather all ingredients. Preheat the oven to 375 degrees F (190 degrees C). Melt 2 tablespoons butter in a skillet over medium heat. Stir in onion and garlic, and cook slowly until the onion caramelizes to a dark brown, about 15 minutes. Meanwhile, combine cream, tomato sauce, remaining butter, salt, cayenne pepper, and garam masala in a saucepan over medium-high heat; bring to a simmer.Reduce heat to medium-low, cover, and simmer, stirring occasionally, for 30 minutes. Stir in caramelized onions.While the sauce is simmering, toss chicken with vegetable oil until coated. Season with tandoori masala and spread out onto a baking sheet.Bake chicken in the preheated oven until no longer pink in the center, about 12 minutes.Add cooked chicken to the sauce and simmer for 5 minutes before serving."
          />
           <RecipeCard 
            title="Biryani" 
            description="A spicy dish made of rice and chicken." 
            process="Thinly slice the onion.
Always use fresh ginger garlic paste.
Be accurate in using spices
Fully cook your meat.
Use Basmati rice to make presentable and aromatic.
Be careful, when you soak biryani rice.
Fully drain the water from boil rice before making the biryani layer."
          />

        </div>
      </main>
    </div>
  );
}

function RecipeCard({ title, description }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={styles.button}>View Recipe</button>
    </div>
  );
}





