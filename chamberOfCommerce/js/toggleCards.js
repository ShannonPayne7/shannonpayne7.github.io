function toggleCards() {
    document.getElementById("directoryCards").classList.toggle("change");
  
    if (document.getElementById("directoryCards").className == "change") {
        document.getElementById("gridButton").setAttribute('src', 'https://img.icons8.com/metro/26/000000/list.png');
        document.getElementById("gridButton").setAttribute('alt', 'list view');
    } else {
        document.getElementById("gridButton").setAttribute('src', 'https://img.icons8.com/metro/26/000000/activity-grid-2.png');
        document.getElementById("gridButton").setAttribute('alt', 'grid view');
    }
  }
