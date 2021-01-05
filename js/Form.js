class Form {
  constructor() {
    this.input = createInput('')
    this.button = createButton('Play')
    this.greeting = createElement('h2')
    
  }

  hide() {
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
  }


  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    
    this.input.position(displayWidth /2  - 40 , displayHeight / 2 - 80);
    this.button.position(displayWidth / 2 + 30 ,displayHeight / 2 );

    this.button.mousePressed(() => {
    this.button.hide()
      
    this.input.hide()
      player.name = this.input.value()
      
      playerCount += 1;
      player.index = playerCount
      console.log(playerCount)
      player.update()
      player.updateCount(playerCount);
      this.greeting.html('hello' + player.name)
      this.greeting.position(displayWidth /2  - 70, displayHeight / 2- 4)
    
      
    });

  }
}
