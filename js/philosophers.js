function myFunction(x) {
    if (x.matches) { // If media query matches
      document.querySelectorAll(".btn-drop")[0].style.display = "none";
      document.querySelector(".names").style.display = "unset";
    } else {
        document.querySelectorAll(".btn-drop")[0].style.display = "unset";
        document.querySelector(".names").style.display = "none";
    }
  }
  
  var x = window.matchMedia("(min-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

var socratesData = {
    name:"Socrates (470–399 BCE)",
    information:"A necessary inclusion by virtue of his role as, essentially, the founder of Western Philosophy, Socrates is nonetheless unique among entrants on this list for having produced no written works reflecting his key ideas or principles. Thus, the body of his thoughts and ideas is left to be deciphered through the works of his two most prominent students, Plato and Xenophon, as well as to the legions of historians and critics who have written on him since. The classical Greek thinker is best known through Plato’s dialogues, which reveal a key contributor to the fields of ethics and education. And because Socrates is best known as a teacher of thought and insight, it is perhaps appropriate that his most widely recognized contribution is a way of approaching education that remains fundamentally relevant even today. The so-called Socratic Method, which involves the use of of questioning and discourse to promote open dialogue on complex topics and to lead pupils to their own insights, is on particular display in the Platonic dialogues. His inquisitive approach also positioned him as a central social and moral critic of the Athenian leadership, which ultimately led to his trial and execution for corrupting the minds of young Athenians.",
    title2:"Socrates’ Big Ideas",
    firstIdea:"Argued that Athenians were wrong-headed in their emphasis on families, careers, and politics at the expense of the welfare of their souls;",
    secondIdea:"Is sometimes attributed the statement “I know that I know nothing,” to denote an awareness of his ignorance, and in general, the limitations of human knowledge;",
    thirdIdea:"Believed misdeeds were a consequence of ignorance, that those who engaged in nonvirtuous behavior did so because they didn’t know any better.",
    title3:"Socrates’ Key Works",
    firstWork:"Early Socratic Dialogues"
}

document.querySelectorAll(".name h1")[0].innerHTML = socratesData.name;
document.querySelectorAll(".information p")[0].innerHTML = socratesData.information;
document.querySelectorAll(".information h2")[0].innerHTML = socratesData.title2;
document.querySelectorAll(".information li")[0].innerHTML = socratesData.firstIdea;
document.querySelectorAll(".information li")[1].innerHTML = socratesData.secondIdea;
document.querySelectorAll(".information li")[2].innerHTML = socratesData.thirdIdea;
document.querySelectorAll(".information h2")[1].innerHTML = socratesData.title3;
document.querySelectorAll(".information .first-work")[0].innerHTML = socratesData.firstWork;
document.querySelectorAll(".information li")[4].classList.add("remove");
document.querySelectorAll(".information li")[5].classList.add("remove");    

function socrates(){
    document.querySelectorAll(".information li")[4].classList.add("remove");
    document.querySelectorAll(".information li")[5].classList.add("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = socratesData.name;
    document.querySelectorAll(".information p")[0].innerHTML = socratesData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = socratesData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = socratesData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = socratesData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = socratesData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = socratesData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = socratesData.firstWork;    
    document.querySelectorAll(".names p")[0].classList.add("socrates");
    document.querySelectorAll(".names p")[1].classList.remove("aristotle");
    document.querySelectorAll(".names p")[2].classList.remove("plato");
    document.querySelectorAll(".names p")[3].classList.remove("parmenides");
    document.querySelectorAll(".names p")[4].classList.remove("epictus");
    document.querySelectorAll(".names p")[5].classList.remove("seneca");
    document.querySelectorAll(".names p")[6].classList.remove("confucius");
    document.querySelectorAll(".names p")[7].classList.remove("aquinas");
    document.querySelectorAll(".names p")[8].classList.remove("descartes");
    document.querySelectorAll(".names p")[9].classList.remove("foucault");
}

var aristotleData = {
    name:"Aristotle (384–322 BCE)",
    information:"Aristotle is among the most important and influential thinkers and teachers in human history, often considered — alongside his mentor, Plato — to be a father of Western Philosophy.” Born in the northern part of ancient Greece, his writings and ideas on metaphysics, ethics, knowledge, and methodological inquiry are at the very root of human thought. Most philosophers who followed — both those who echoed and those who opposed his ideas — owed a direct debt to his wide-ranging influence. Aristotle’s enormous impact was a consequence both of the breadth of his writing and his personal reach during his lifetime." + "<br>" + "<br>" + "In addition to being a philosopher, Aristotle was also a scientist, which led him to consider an enormous array of topics, and largely through the view that all concepts and knowledge are ultimately based on perception. A small sampling of topics covered in Aristotle’s writing includes physics, biology, psychology, linguistics, logic, ethics, rhetoric, politics, government, music, theatre, poetry, and metaphysics. He was also in a unique position to prevail directly over thinking throughout the known world, tutoring a young Alexander the Great at the request of the future conqueror’s father, Phillip II of Macedon. This position of influence gave Aristotle the means to establish the library at Lyceum, where he produced hundreds of writings on papyrus scrolls. And of course, it also gave him direct sway over the mind of a man who would one day command an empire stretching from Greece to northwestern India. The result was an enormous sphere of influence for Aristotle’s ideas, one that only began to be challenged by Renaissance thinkers nearly 2,000 years later.",
    title2:"Aristotle’s Big Ideas",
    firstIdea:"Asserted the use of logic as a method of argument and offered the basic methodological template for analytical discourse;",
    secondIdea:"Espoused the understanding that knowledge is built from the study of things that happen in the world, and that some knowledge is universal — a prevailing set of ideas throughout Western Civilization thereafter;",
    thirdIdea:"Defined metaphysics as “the knowledge of immaterial being,” and used this framework to examine the relationship between substance (a combination of matter and form) and essence, from which he devises that man is comprised from a unity of the two.",
    title3:"Aristotle’s Key Works",
    firstWork:"The Metaphysics",
    secondWork:"Nicomachean Ethics",
    thirdWork:"Poetics"
}

function aristotle(){
    document.querySelectorAll(".information li")[4].classList.remove("remove");
    document.querySelectorAll(".information li")[5].classList.remove("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = aristotleData.name;
    document.querySelectorAll(".information p")[0].innerHTML = aristotleData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = aristotleData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = aristotleData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = aristotleData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = aristotleData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = aristotleData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = aristotleData.firstWork;
    document.querySelectorAll(".information .second-work")[0].innerHTML = aristotleData.secondWork;
    document.querySelectorAll(".information .third-work")[0].innerHTML = aristotleData.thirdWork;
    document.querySelectorAll(".names p")[0].classList.remove("socrates");
    document.querySelectorAll(".names p")[1].classList.add("aristotle");
    document.querySelectorAll(".names p")[2].classList.remove("plato");
    document.querySelectorAll(".names p")[3].classList.remove("parmenides");
    document.querySelectorAll(".names p")[4].classList.remove("epictus");
    document.querySelectorAll(".names p")[5].classList.remove("seneca");
    document.querySelectorAll(".names p")[6].classList.remove("confucius");
    document.querySelectorAll(".names p")[7].classList.remove("aquinas");
    document.querySelectorAll(".names p")[8].classList.remove("descartes");
    document.querySelectorAll(".names p")[9].classList.remove("foucault");
}

var platoData = {
    name:"Plato (427–348 BCE)",
    information:"Greek philosopher and teacher Plato did nothing less than found the first institution of higher learning in the Western World, establishing the Academy of Athens and cementing his own status as the most important figure in the development of western philosophical tradition. As the pupil of Socrates and the mentor to Aristotle, Plato is the connecting figure in what might be termed the great triumvirate of Greek thought in both philosophy and science. A quote by British philosopher Alfred North Whitehead sums up the enormity of his influence, noting “the safest general characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato.” Indeed, it could be argued that Plato founded political philosophy, introducing both the dialectic and dialogic forms of writing as ways to explore various areas of thought. (Often, in his dialogues, he employed his mentor Socrates as the vessel for his own thoughts and ideas.) While he was not the first individual to partake of the activity of philosophy, he was perhaps the first to truly define what it meant, to articulate its purpose, and to reveal how it could be applied with scientific rigor. This orientation provided a newly concreted framework for considering questions of ethics, politics, knowledge, and theology. Such is to say that it is nearly impossible to sum up the impact of Plato’s ideas on science, ethics, mathematics, or the evolution of thought itself other than to say it has been total, permeating, and inexorable from the tradition of rigorous thinking itself.",
    title2:"Plato’s Big Ideas",
    firstIdea:"Expressed the view, often referred to as Platonism, that those whose beliefs are limited only to perception are failing to achieve a higher level of perception, one available only to those who can see beyond the material world;",
    secondIdea:"Articulated the theory of forms, the belief that the material world is an apparent and constantly changing world but that another, invisible world provides unchanging causality for all that we do see;",
    thirdIdea:"Held the foundational epistemological view of “justified true belief,” that for one to know that a proposition is true, one must have justification for the relevant true proposition.",
    title3:"Plato’s Key Works",
    firstWork:"The Republic (380 BCE)",
    secondWork:"The Laws (348 BCE)",
    thirdWork:"Plato: Complete Works"
}

function plato(){
    document.querySelectorAll(".information li")[4].classList.remove("remove");
    document.querySelectorAll(".information li")[5].classList.remove("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = platoData.name;
    document.querySelectorAll(".information p")[0].innerHTML = platoData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = platoData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = platoData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = platoData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = platoData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = platoData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = platoData.firstWork;
    document.querySelectorAll(".information .second-work")[0].innerHTML = platoData.secondWork;
    document.querySelectorAll(".information .third-work")[0].innerHTML = platoData.thirdWork;
    document.querySelectorAll(".names p")[0].classList.remove("socrates");
    document.querySelectorAll(".names p")[1].classList.remove("aristotle");
    document.querySelectorAll(".names p")[2].classList.add("plato");
    document.querySelectorAll(".names p")[3].classList.remove("parmenides");
    document.querySelectorAll(".names p")[4].classList.remove("epictus");
    document.querySelectorAll(".names p")[5].classList.remove("seneca");
    document.querySelectorAll(".names p")[6].classList.remove("confucius");
    document.querySelectorAll(".names p")[7].classList.remove("aquinas");
    document.querySelectorAll(".names p")[8].classList.remove("descartes");
    document.querySelectorAll(".names p")[9].classList.remove("foucault");
}

var parmenidesData = {
    name:"Parmenides (c. 515–450 BCE)",
    information:"Parmenides of Elea, active in the earlier part of the 5th c. BCE, authored a difficult metaphysical poem that has earned him a reputation as early Greek philosophy’s most profound and challenging thinker. His philosophical stance has typically been understood as at once extremely paradoxical and yet crucial for the broader development of Greek natural philosophy and metaphysics. He has been seen as a metaphysical monist (of one stripe or another) who so challenged the naïve cosmological theories of his predecessors that his major successors among the Presocratics were all driven to develop more sophisticated physical theories in response to his arguments. The difficulties involved in the interpretation of his poem have resulted in disagreement about many fundamental questions concerning his philosophical views, such as: whether he actually was a monist and, if so, what kind of monist he was; whether his system reflects a critical attitude toward earlier thinkers such as the Milesians, Pythagoreans, and Heraclitus, or whether he was motivated simply by more strictly logical concerns, such as the paradox of negative existentials that Bertrand Russell detected at the heart of his thought; whether he considered the world of our everyday awareness, with its vast population of entities changing and affecting one another in all manner of ways, to be simply an illusion, and thus whether the lengthy cosmological portion of his poem represented a genuine attempt to understand this world at all. This entry aims to provide an overview of Parmenides’ work and of some of the major interpretive approaches advanced over the past few decades. It concludes by suggesting that understanding his thought and his place in the development of early Greek philosophy requires taking due account of the fundamental modal distinctions that he was the first to articulate and explore with any precision.",
    title2:"Parmenides’ Big Ideas",
    firstIdea:"“Being” is the only and homogeneous substance that, permeating all things (including human beings and the air) that our senses perceive in the cosmos, constitutes the cosmos itself.",
    secondIdea:"Nothing Can Come from Nothing. It seems that Parmenides' claims were hard to comprehend for his listeners, necessitating Zeno's mathematical paradoxes. Parmenides' main point, however, was simply that nothing could come from nothing, that being must have always existed, and that reality was uniform, unbroken, and unbreakable.",
    thirdIdea:"Claimed that all is One and unchanging exerted considerable influence on later philosophers and schools of thought.",
    title3:"Parmenides’ Key Works",
    firstWork:"On Nature (475 BC)",
    secondWork:"The Way of Truth",
    thirdWork:"The Way of Appearance/Opinion"
}

function parmenides(){
    document.querySelectorAll(".information li")[4].classList.remove("remove");
    document.querySelectorAll(".information li")[5].classList.remove("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = parmenidesData.name;
    document.querySelectorAll(".information p")[0].innerHTML = parmenidesData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = parmenidesData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = parmenidesData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = parmenidesData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = parmenidesData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = parmenidesData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = parmenidesData.firstWork;
    document.querySelectorAll(".information .second-work")[0].innerHTML = parmenidesData.secondWork;
    document.querySelectorAll(".information .third-work")[0].innerHTML = parmenidesData.thirdWork;
    document.querySelectorAll(".names p")[0].classList.remove("socrates");
    document.querySelectorAll(".names p")[1].classList.remove("aristotle");
    document.querySelectorAll(".names p")[2].classList.remove("plato");
    document.querySelectorAll(".names p")[3].classList.add("parmenides");
    document.querySelectorAll(".names p")[4].classList.remove("epictus");
    document.querySelectorAll(".names p")[5].classList.remove("seneca");
    document.querySelectorAll(".names p")[6].classList.remove("confucius");
    document.querySelectorAll(".names p")[7].classList.remove("aquinas");
    document.querySelectorAll(".names p")[8].classList.remove("descartes");
    document.querySelectorAll(".names p")[9].classList.remove("foucault");
}

var epictusData = {
    name:"Epictetus (c. 55–c. 135 AD)",
    information:"A Greek philosopher of 1st and early 2nd centuries C.E., and an exponent of Stoic ethics notable for the consistency and power of his ethical thought and for effective methods of teaching. Epictetus’s chief concerns are with integrity, self-management, and personal freedom, which he advocates by demanding of his students a thorough examination of two central ideas, the capacity he terms ‘volition’ (prohairesis) and the correct use of impressions (chrēsis tōn phantasiōn). Heartfelt and satirical by turns, Epictetus has had significant influence on the popular moralistic tradition, but he is more than a moralizer; his lucid resystematization and challenging application of Stoic ethics qualify him as an important philosopher in his own right.",
    title2:"Epictetus’ Big Ideas",
    firstIdea:"“Rational” as a descriptive term means that human beings have the capacity to “use impressions” in a reflective manner. Animals, like humans, use their impressions of the world in that their behavior is guided by what they perceive their circumstances to be. But human beings also examine the content of their impressions to determine whether they are true or false; we have the faculty of “assent”.",
    secondIdea:"Equally important for him is that human rationality has as its setting a maximally rational universe. His confidence in the fundamental orderliness of all things is expressed in frequent references to Zeus or “the god” as the designer and administrator of the universe.",
    thirdIdea:"This distinction between what is internal to the sphere of volition and what is external to it is the foundation of Epictetus’s system of value. What is ultimately worth having, the “good of humankind,” consists in “a certain disposition of the volition”.",
    title3:"Epictetus’ Key Works",
    firstWork:"Discourses",
    secondWork:"Encheiridion",
    thirdWork:"The Complete Works of Epictetus"
}

function epictus(){
    document.querySelectorAll(".information li")[4].classList.remove("remove");
    document.querySelectorAll(".information li")[5].classList.remove("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = epictusData.name;
    document.querySelectorAll(".information p")[0].innerHTML = epictusData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = epictusData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = epictusData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = epictusData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = epictusData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = epictusData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = epictusData.firstWork;
    document.querySelectorAll(".information .second-work")[0].innerHTML = epictusData.secondWork;
    document.querySelectorAll(".information .third-work")[0].innerHTML = epictusData.thirdWork;
    document.querySelectorAll(".names p")[0].classList.remove("socrates");
    document.querySelectorAll(".names p")[1].classList.remove("aristotle");
    document.querySelectorAll(".names p")[2].classList.remove("plato");
    document.querySelectorAll(".names p")[3].classList.remove("parmenides");
    document.querySelectorAll(".names p")[4].classList.add("epictus");
    document.querySelectorAll(".names p")[5].classList.remove("seneca");
    document.querySelectorAll(".names p")[6].classList.remove("confucius");
    document.querySelectorAll(".names p")[7].classList.remove("aquinas");
    document.querySelectorAll(".names p")[8].classList.remove("descartes");
    document.querySelectorAll(".names p")[9].classList.remove("foucault");
}

var senecaData = {
    name:"Seneca (4 BC – AD 65)",
    information:"Seneca is a major philosophical figure of the Roman Imperial Period. As a Stoic philosopher writing in Latin, Seneca makes a lasting contribution to Stoicism. He occupies a central place in the literature on Stoicism at the time, and shapes the understanding of Stoic thought that later generations were to have. Seneca’s philosophical works played a large role in the revival of Stoic ideas in the Renaissance. Until today, many readers approach Stoic philosophy through Seneca, rather than through the more fragmentary evidence that we have for earlier Stoics. Seneca’s writings are stunningly diverse in their generic range. More than that, Seneca develops further and shapes several philosophical genres, most important, the letter and so-called “consolations”; his essay On Mercy is considered the first example of what came to be known as the “mirror of the prince” literature." + "<br>" + "<br>" + "After several centuries of relative neglect, Seneca’s philosophy has been rediscovered in the last few decades, in what might be called a second revival of Senecan thought. In part, this renewed interest is the result of a general reappraisal of Roman culture. It is also fuelled by major progress that has been made in our understanding of Greek Hellenistic philosophy, and by recent developments in contemporary ethics, such as a renewed interest in the theory of emotions, roles and relationships, and the fellowship of all human beings. And finally, some influential scholars have found, in the wake of Foucault’s reading of Seneca, that Seneca speaks to some distinctively modern concerns.",
    title2:"Seneca’s Big Ideas",
    firstIdea:"Keep calm. There is nothing more destructive than a violent emotion out of control, or so Seneca argued in his essay On Anger.",
    secondIdea:"Prioritize leisure. The opposite of the constant busyness of the preoccupied person is the quiet of leisure. Seneca devoted a whole essay to the topic. For us ‘leisure’ often means a whole series of activities outside of paid work that can be just as hectic as work itself. That’s not what Seneca had in mind. By ‘leisure’ he meant, in the first instance, doing nothing, being neither distracted nor pre-occupied, but fully awake in the present moment.",
    thirdIdea:"Live modestly. Too many people, Seneca observed, waste a large part of their lives in the pursuit of wealth that they’ll never have the time to enjoy.",
    title3:"Seneca’s Key Works",
    firstWork:"Medea",
    secondWork:"Hercules Furens (“The Mad Hercules”)",
    thirdWork:"Phoenissae (“The Phoenician Women”)"
}

function seneca(){
    document.querySelectorAll(".information li")[4].classList.remove("remove");
    document.querySelectorAll(".information li")[5].classList.remove("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = senecaData.name;
    document.querySelectorAll(".information p")[0].innerHTML = senecaData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = senecaData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = senecaData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = senecaData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = senecaData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = senecaData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = senecaData.firstWork;
    document.querySelectorAll(".information .second-work")[0].innerHTML = senecaData.secondWork;
    document.querySelectorAll(".information .third-work")[0].innerHTML = senecaData.thirdWork;
    document.querySelectorAll(".names p")[0].classList.remove("socrates");
    document.querySelectorAll(".names p")[1].classList.remove("aristotle");
    document.querySelectorAll(".names p")[2].classList.remove("plato");
    document.querySelectorAll(".names p")[3].classList.remove("parmenides");
    document.querySelectorAll(".names p")[4].classList.remove("epictus");
    document.querySelectorAll(".names p")[5].classList.add("seneca");
    document.querySelectorAll(".names p")[6].classList.remove("confucius");
    document.querySelectorAll(".names p")[7].classList.remove("aquinas");
    document.querySelectorAll(".names p")[8].classList.remove("descartes");
    document.querySelectorAll(".names p")[9].classList.remove("foucault");
}

var confuciusData = {
    name:"Confucius (551–479 BCE)",
    information:"Chinese teacher, writer, and philosopher Confucius viewed himself as a channel for the theological ideas and values of the imperial dynasties that came before him. With an emphasis on family and social harmony, Confucius advocated for a way of life that reflected a spiritual and religious tradition, but which was also distinctly humanist and even secularist. Confucius — thought to be a contemporary of Taoist progenitor Lao-Tzu — had a profound impact on the development of Eastern legal customs and the emergence of a scholarly ruling class. Confucianism would engage in historic push-pull with the philosophies of Buddhism and Taoism, experiencing ebbs and flows in influence, its high points coming during the Han (206 BCE–220 CE), Tang (618–907 CE), and Song (960–1296 CE) Dynasties. As Buddhism became the dominant spiritual force in China, Confucianism declined in practice. However, it remains a foundational philosophy underlying Asian and Chinese attitudes toward scholarly, legal, and professional pursuits.",
    title2:"Confucius’ Big Ideas",
    firstIdea:"Developed a belief system focused on both personal and governmental morality through qualities such as justice, sincerity, and positive relationships with others;",
    secondIdea:"Advocated for the importance of strong family bonds, including respect for the elder, veneration of one’s ancestors, and marital loyalty;",
    thirdIdea:"Believed in the value of achieving ethical harmony through skilled judgment rather than knowledge of rules, denoting that one should achieve morality through self-cultivation.",
    title3:"Confucius’ Key Works",
    firstWork:"The Analects",
    secondWork:"The Complete Confucius"
}

function confucius(){
    document.querySelectorAll(".information li")[4].classList.remove("remove");
    document.querySelectorAll(".information li")[5].classList.add("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = confuciusData.name;
    document.querySelectorAll(".information p")[0].innerHTML = confuciusData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = confuciusData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = confuciusData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = confuciusData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = confuciusData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = confuciusData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = confuciusData.firstWork;
    document.querySelectorAll(".information .second-work")[0].innerHTML = confuciusData.secondWork;
    document.querySelectorAll(".information .third-work")[0].innerHTML = confuciusData.thirdWork;
    document.querySelectorAll(".names p")[0].classList.remove("socrates");
    document.querySelectorAll(".names p")[1].classList.remove("aristotle");
    document.querySelectorAll(".names p")[2].classList.remove("plato");
    document.querySelectorAll(".names p")[3].classList.remove("parmenides");
    document.querySelectorAll(".names p")[4].classList.remove("epictus");
    document.querySelectorAll(".names p")[5].classList.remove("seneca");
    document.querySelectorAll(".names p")[6].classList.add("confucius");
    document.querySelectorAll(".names p")[7].classList.remove("aquinas");
    document.querySelectorAll(".names p")[8].classList.remove("descartes");
    document.querySelectorAll(".names p")[9].classList.remove("foucault");
}

var aquinasData = {
    name:"Saint Thomas Aquinas (1225–1274)",
    information:"Thomas Aquinas was a 13th century Dominican friar, theologian and Doctor of the Church, born in what is known today as the Lazio region of Italy. His most important contribution to Western thought is the concept of natural theology (sometimes referred to as Thomism in tribute to his influence). This belief system holds that the existence of God is verified through reason and rational explanation, as opposed to through scripture or religious experience. This ontological approach is among the central premises underpinning modern Catholic philosophy and liturgy. His writings, and Aquinas himself, are still considered among the preeminent models for Catholic priesthood. His ideas also remain central to theological debate, discourse, and modes of worship.",
    title2:"Aquinas’ Big Ideas",
    firstIdea:"Adhered to the Platonic/Aristotelian principle of realism, which holds that certain absolutes exist in the universe, including the existence of the universe itself;",
    secondIdea:"Focused much of his work on reconciling Aristotelian and Christian principles, but also expressed a doctrinal openness to Jewish and Roman philosophers, all to the end of divining truth wherever it could be found;",
    thirdIdea:"The Second Vatican Council (1962–65) declared his Summa Theolgoiae — a compendium of all the teachings of the Catholic Church to that point — “Perennial Philosophy.”",
    title3:"Aquinas’ Key Works",
    firstWork:"Summa Theologica (1265–74)",
    secondWork:"Thomas Aquinas: Selected Writings"
}

function aquinas(){
    document.querySelectorAll(".information li")[4].classList.remove("remove");
    document.querySelectorAll(".information li")[5].classList.add("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = aquinasData.name;
    document.querySelectorAll(".information p")[0].innerHTML = aquinasData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = aquinasData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = aquinasData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = aquinasData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = aquinasData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = aquinasData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = aquinasData.firstWork;
    document.querySelectorAll(".information .second-work")[0].innerHTML = aquinasData.secondWork;
    document.querySelectorAll(".information .third-work")[0].innerHTML = aquinasData.thirdWork;
    document.querySelectorAll(".names p")[0].classList.remove("socrates");
    document.querySelectorAll(".names p")[1].classList.remove("aristotle");
    document.querySelectorAll(".names p")[2].classList.remove("plato");
    document.querySelectorAll(".names p")[3].classList.remove("parmenides");
    document.querySelectorAll(".names p")[4].classList.remove("epictus");
    document.querySelectorAll(".names p")[5].classList.remove("seneca");
    document.querySelectorAll(".names p")[6].classList.remove("confucius");
    document.querySelectorAll(".names p")[7].classList.add("aquinas");
    document.querySelectorAll(".names p")[8].classList.remove("descartes");
    document.querySelectorAll(".names p")[9].classList.remove("foucault");
}

var descartesData = {
    name:"René Descartes (1596–1650)",
    information:"A French philosopher, mathematician, and scientist, Descartes was born in France but spent 20 years of his life in the Dutch Republic. As a member of the Dutch States Army, then as the Prince of Orange and subsequently as Stadtholder (a position of national leadership in the Dutch Republic), Descartes wielded considerable intellectual influence over the period known as the Dutch Golden Age. He often distinguished himself by refuting or attempting to undo the ideas of those that came before him.",
    title2:"Descartes’ Big Ideas",
    firstIdea:"Discards belief in all things that are not absolutely certain, emphasizing the understanding of that which can be known for sure;",
    secondIdea:"Is recognized as the father of analytical geometry;",
    thirdIdea:"Regarded as one of the leading influences in the Scientific Revolution — a period of intense discovery, revelation, and innovation that rippled through Europe between the Renaissance and Enlightenment eras (roughly speaking, 15th to 18th centuries).",
    title3:"Descartes’ Key Works",
    firstWork:"Meditations on First Philosophy (1641)",
    secondWork:"Principles of Philosophy (1644)",
    thirdWork:"The Passions of the Soul and Other Late Philosophical Writings (1649)"
}

function descartes(){
    document.querySelectorAll(".information li")[4].classList.remove("remove");
    document.querySelectorAll(".information li")[5].classList.remove("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = descartesData.name;
    document.querySelectorAll(".information p")[0].innerHTML = descartesData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = descartesData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = descartesData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = descartesData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = descartesData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = descartesData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = descartesData.firstWork;
    document.querySelectorAll(".information .second-work")[0].innerHTML = descartesData.secondWork;
    document.querySelectorAll(".information .third-work")[0].innerHTML = descartesData.thirdWork;
    document.querySelectorAll(".names p")[0].classList.remove("socrates");
    document.querySelectorAll(".names p")[1].classList.remove("aristotle");
    document.querySelectorAll(".names p")[2].classList.remove("plato");
    document.querySelectorAll(".names p")[3].classList.remove("parmenides");
    document.querySelectorAll(".names p")[4].classList.remove("epictus");
    document.querySelectorAll(".names p")[5].classList.remove("seneca");
    document.querySelectorAll(".names p")[6].classList.remove("confucius");
    document.querySelectorAll(".names p")[7].classList.remove("aquinas");
    document.querySelectorAll(".names p")[8].classList.add("descartes");
    document.querySelectorAll(".names p")[9].classList.remove("foucault");
}

var foucaultData = {
    name:"Michel Foucault (1926-1984)",
    information:"Historian, social theorist, and philosopher Michel Foucault, born in the riverfront city of Poiltiers, France, dedicated much of his teaching and writing to the examination of power and knowledge and their connection to social control. Though often identified as a postmodernist, Foucault preferred to think of himself as a critic of modernity. His service as an international diplomat on behalf of France also influenced his understanding of social constructs throughout history and how they have served to enforce racial, religious, and sexual inequality. His ideals have been particularly embraced by progressive movements, and he allied with many during his lifetime. Active in movements against racism, human rights abuses, prisoner abuses, and marginalization of the mentally ill, he is often cited as a major influence in movements for social justice, human rights, and feminism. More broadly speaking, his examination of power and social control has had a direct influence on the studies of sociology, communications, and political science.",
    title2:"Foucault’s Big Ideas",
    firstIdea:"Held the conviction that the study of philosophy must begin through a close and ongoing study of history;",
    secondIdea:"Demanded that social constructs be more closely examined for hierarchical inequalities, as well as through an analysis of the corresponding fields of knowledge supporting these unequal structures;",
    thirdIdea:"Believed oppressed humans are entitled to rights and they have a duty to rise up against the abuse of power to protect these rights.",
    title3:"Foucault’s Key Works",
    firstWork:"The Order of Things: An Archaeology of the Human Sciences (1966)",
    secondWork:"The Archaeology of Knowledge: And the Discourse on Language (1969)",
    thirdWork:"Discipline & Punish: The Birth of the Prison (1975)"
}

function foucault(){
    document.querySelectorAll(".information li")[4].classList.remove("remove");
    document.querySelectorAll(".information li")[5].classList.remove("remove");
    document.querySelectorAll(".name h1")[0].innerHTML = foucaultData.name;
    document.querySelectorAll(".information p")[0].innerHTML = foucaultData.information;
    document.querySelectorAll(".information h2")[0].innerHTML = foucaultData.title2;
    document.querySelectorAll(".information li")[0].innerHTML = foucaultData.firstIdea;
    document.querySelectorAll(".information li")[1].innerHTML = foucaultData.secondIdea;
    document.querySelectorAll(".information li")[2].innerHTML = foucaultData.thirdIdea;
    document.querySelectorAll(".information h2")[1].innerHTML = foucaultData.title3;
    document.querySelectorAll(".information .first-work")[0].innerHTML = foucaultData.firstWork;
    document.querySelectorAll(".information .second-work")[0].innerHTML = foucaultData.secondWork;
    document.querySelectorAll(".information .third-work")[0].innerHTML = foucaultData.thirdWork;
    document.querySelectorAll(".names p")[0].classList.remove("socrates");
    document.querySelectorAll(".names p")[1].classList.remove("aristotle");
    document.querySelectorAll(".names p")[2].classList.remove("plato");
    document.querySelectorAll(".names p")[3].classList.remove("parmenides");
    document.querySelectorAll(".names p")[4].classList.remove("epictus");
    document.querySelectorAll(".names p")[5].classList.remove("seneca");
    document.querySelectorAll(".names p")[6].classList.remove("confucius");
    document.querySelectorAll(".names p")[7].classList.remove("aquinas");
    document.querySelectorAll(".names p")[8].classList.remove("descartes");
    document.querySelectorAll(".names p")[9].classList.add("foucault");
}