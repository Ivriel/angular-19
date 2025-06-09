import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-todolist',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  task="";
  tasksList:{id:number,name:string | number,completed:boolean}[] = []

  addTask(){
    this.tasksList.push({id:this.tasksList.length+1,name:this.task,completed:false})
    this.task =""
    console.log(this.tasksList)
  }

  deleteTask(taskId:number){ // filter ini membentuk array baru dengan menyaring dan memasukkan item dari array lama yang memenuhi kondisi. ini menyaring data yang tidak ingin dihapus
    this.tasksList= this.tasksList.filter((item)=>item.id!=taskId) // filter task yang sudah di klik dengan id yang sama di array
  } // kalau id tugas ga sama dengan taskId, maka tetap pertahankan
  // kalau ID nya sama, berarti itu adalah tugas yang mau dihapus, maka ga dimasukkan ke array baru
  // dia tidak langsung hapus. tapi bikin array baru yang isinya adalah data yang tidak ingin dihapus
 // intinya dia bikin array baru lagi yang kondisi item nya adalah item dengan id yang tidak sama dengan taskId
  markCompleted(taskId: number){// dapatkan id task yang di click 
    const task = this.tasksList.find(task => task.id === taskId); // cari task yang di klik. samakan id task yang di klik dengan id task yang di array
    if (task) {
      task.completed = !task.completed;
      console.log(task.completed)
    }
  }
}
