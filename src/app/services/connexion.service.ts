import { Injectable } from '@angular/core';

//Importer la class du Router
import{Router} from'@angular/router';

@Injectable()
export class ConnexionService {

  constructor(
    //Déclarer une class pour utiliser le router
    private router:Router
  ) { }

userLogin(infos){
  console.log('User try to login',infos)

  //Vérifier les informations saisies par l'utilisateur 
  if(infos.login=='admin' && infos.password=='root'){
    console.log('Vous êtes connecté')

    //Naviguer vers la vue connected 
    this.router.navigateByUrl('/connected')
  }else{
    console.log('Accès refusé...')
  }
}


}
