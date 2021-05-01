export class UtilitarioId{

   retornoId(url : string){
       let id = url.split('/')
        return id[6]
    }
}