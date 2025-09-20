import One from "../../assets/number/1.png";
import Two from "../../assets/number/2.svg";
import Tree from "../../assets/number/3.svg";


function Points() {
  return (
     <section className="points" >
			<div>
				<div className="card" >
					<img src={One} title="1" className="number"/>
					<p className="pointsText">
						Регистрируйся и верифицируйся на GG.BY
					</p>
				</div>
				<div className="card" >
					<img src={Two} title="2" className="number" />
					<p className="pointsText" >
						Вноси депозиты
					</p>
				</div>
				<div className="card" >
					<img src={Tree}  className="number" />
					<p className="pointsText">
						Получай приветственные бонусы
					</p>
				</div>
			</div> 
      <a href="https://www.grandcasino.by" target="_blank" rel="noopener noreferrer">
        <button id="tag"> НАЧАТЬ ИГРАТЬ</button>
      </a>
      
		</section>
    
  );
}

export default Points;
