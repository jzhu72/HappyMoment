function main() {
  var quotes = ['You are so beautiful.',
  'The moments of happiness we enjoy take us by surprise. It is not that we seize them, but that they seize us. -Ashley Montagu',
  'The only joy in the world is to begin. -Cesare Pavese',
  'It is more fitting for a man to laugh at life than to lament over it. -Seneca',
  'The secret of happiness is not in doing what one likes, but in liking what one does. -James M. Barrie',
  'Most people would rather be certain they’re miserable, than risk being happy. -Dr. Robert Anthony',
  'Life is really simple, but we insist on making it complicated. -Confucius',
  'The foolish man seeks happiness in the distance, the wise grows it under his feet. -James Oppenheim',
  'The greater part of our happiness or misery depends upon our dispositions, and not upon our circumstances. -Martha Washington',
  'You are so talented.',
  'The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny. -Albert Ellis',
  'Just because it didn’t last forever, doesn’t mean it wasn’t worth your while. -Unknown',
  'Happiness always looks small while you hold it in your hands, but let it go, and you learn at once how big and precious it is. -Maxim Gorky',
  'It was only a sunny smile, and little it cost in the giving, but like morning light it scattered the night and made the day worth living. -F. Scott Fitzgerald',
  'Plenty of people miss their share of happiness, not because they never found it, but because they didn’t stop to enjoy it. -William Feather',
  'No one can make you feel inferior without your consent. -Eleanor Roosevelt',
  'For most of life, nothing wonderful happens. If you don’t enjoy getting up and working and finishing your work and sitting down to a meal with family or friends, then the chances are you’re not going to be very happy. If someone bases his/her happiness on major events like a great job, huge amounts of money, a flawlessly happy marriage or a trip to Paris, that person isn’t going to be happy much of the time. If, on the other hand, happiness depends on a good breakfast, flowers in the yard, a drink or a nap, then we are more likely to live with quite a bit of happiness. -Andy Rooney',
  'Learn to let go. That is the key to happiness. -Buddha',
  ];
  var quote = quotes[Math.floor(Math.random()*quotes.length)];

  $('.startButton').click(function(){
      var quotePage = window.open("write.html", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes,top=150,left=300,width=900,height=600");
      $(quotePage.document.head).append("<link rel='stylesheet' href='write.css' type='text/css'/>");
      quotePage.document.write('<p>' + quote + '</p>');
      quotePage.document.close();
  });
}

$(document).ready(main);
