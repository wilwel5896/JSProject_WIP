//immediate invoked function expression
(function() {
    const quotes = [
        
      {
        quote:
          "If you try to fail, and succeed, which have you done?",
        author: "George Carlin"
      },
      {
        quote:
          "I went to a bookstore and asked the saleswoman, 'Where's the self-help section?' She said if she told me, it would defeat the purpose.",
        author: "George Carlin "
      },
      {
        quote: "How is it possible to have a civil war?",
        author: "George Carlin"
      },
      {
        quote:
          "My mother always used to say: The older you get, the better you get, unless you’re a banana. ",
        author: "Betty White"
      },
      {
        quote:
          "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
      },
      {
        quote:
          "You know you’ve reached middle age when you’re cautioned to slow down by your doctor, instead of by the police",
        author: " Joan Rivers"
    },
    {
      quote:
        "A day without sunshine is like, you know, night.",
      author: " Steve Martin"
    },
    {
      quote:
        "Why do they call it rush hour when nothing moves?",
      author: " Robin Williams"
    },
    {
      quote:
        "The only mystery in life is why the kamikaze pilots wore helmets.",
      author: " Al McGuire"
    },
    {
      quote:
        "I don’t believe in astrology; I’m a Sagittarius and we’re skeptical",
      author: " Arthur C. Clarke"
    },
    {
      quote:
        "I was born to make mistakes, not to fake perfection",
      author: " Drake"
    },
    {
      quote:
        "Here’s something to think about: How come you never see a headline like ‘Psychic Wins Lottery",
      author: " Jay Leno"
    },
    {
        quote:
          "The standard is the..standard",
        author: " Mike Tomlin"
    },
    {
        quote:
          "It's not about what you're capable of, it's about what you're willing to do",
        author: " Mike Tomlin"
    }
    
    ];
  
   const btn = document.querySelector("button");
   const text =  document.querySelector("#quote");
   const author = document.querySelector(".author");
   btn.addEventListener("click", function() {
       let index = Math.floor(Math.random() * quotes.length);
       text.textContent = quotes[index].quote;
       author.textContent = quotes[index].author;
  
   })
  })();