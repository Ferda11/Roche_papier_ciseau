package jeux.roulette;
import java.util.*;
public class JeuxRoulette{
    public int n;
    int a;
    public int genererNombre(){
        Random random=new Random();
        a=random.nextInt(48)+1;
        if(a<0){
            a=a*-1;

        }
        return a;

    }
    public boolean testInt(String n) {
        boolean resultat = true;
        for (int i = 0; i < n.length(); i++) {
            char c = n.charAt(i);
            if (!Character.isDigit(c)) {
                resultat = false;
                break;
            }
        }
        return resultat;
    }

    Scanner sc=new Scanner(System.in);

    public int contrainteInt(Scanner sc) {
        int result = 0;
        String option2 = sc.nextLine();
        while (testInt(String.valueOf(option2)) == false || option2.isEmpty()) {
            System.out.print("entrer une une valeur numerique :  ");
            option2 = sc.nextLine();
        }
        result = Integer.parseInt(option2);
        return result;
    }

    public void saisir(){
        Scanner scanner=new Scanner(System.in);
        Scanner scan=new Scanner(System.in);
        String rep="";
        int montant;
        
        System.out.println("Tentez votre chance pour gagner");
        System.out.println("Entrer le montant pour placer la parie");
        montant=scanner.nextInt();
        JeuxRoulette r=new JeuxRoulette();
        do{
            int chance=5;
            int score=0;
        do{
            
        int b=r.genererNombre();
        
        
        
        System.out.println("Entrer un nombre entier entre 1 a 48 pour jouer");
        n=r.contrainteInt(scanner);
        System.out.println(b);
        
        if(n!=b){
            //System.out.println("Vous avez perdu!!");
            chance--;
        }
        else{
           // System.out.println("Vous avez gagne");
            score+=1;
            chance--;
        }
        System.out.println("Il ne vous reste que "+" "+chance+" "+"essaies");
    
        }while(chance>0);
        
        System.out.println("votre score est: "+" "+score);
        if(score==3){
            System.out.println("Vous avez gagne"+" "+montant*5);
           }
            if(score==0){
                System.out.println("vous n'avez rien gagne vous perdez");
            }
            if(score==5){
                System.out.println("Vous avez gagne"+" "+montant*10);
            }
   
       
    do{
        
        
        System.out.println("Voulez-vous continuer ecrire oui pour continuer ou non pour arreter");
        rep=scan.nextLine();
           }while(!rep.equals("non")&&!rep.equals("oui"));
       
}while(rep.equals("oui"));
    }
       
   
    public static void main(String a[]){
        JeuxRoulette r=new JeuxRoulette();
        r.saisir();
   
    




    
}
}


