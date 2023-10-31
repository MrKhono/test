import { Injectable } from '@angular/core';
const PROFILE_VISITED = 'PROFILE_VISITED'

@Injectable({
  providedIn: 'root'
})
export class DidacticielService {


  constructor() { }

  checkProfileVisited(){
    return !!localStorage.getItem(PROFILE_VISITED)
  }

  setProfileVisited(){
    localStorage.setItem(PROFILE_VISITED, PROFILE_VISITED)
  }
}
