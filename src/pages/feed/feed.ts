import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {

    titulo: "Leonardo Mello",
    profissao: "Analista de Sistemas",
    descricao: "Estou usando o IONIC Framework.",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comments: "11h ago"

  }

  public lista_filmes = new Array<any>();

  public nome_usuario: string = "Leonardo de Mello Lima";
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }
  ionViewDidLoad() {
    this.movieProvider.getLatestMovie().subscribe(
      
      data=>{

        const response = (data as any);
        const obj_retorno = JSON.parse(response._body)
        this.lista_filmes = obj_retorno.results;
        console.log(obj_retorno);
        
        }), erro=>{
        console.log(erro);
        }
        
       }
      }
    
    
