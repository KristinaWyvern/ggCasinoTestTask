
import { AiTwotoneCalendar, AiFillSafetyCertificate } from "react-icons/ai";
import { MdPayments } from "react-icons/md";

function TextSection() {
  return (
     <section className="textSection" >
			<div className="textRow">
				<div className="divIcon">
					<AiTwotoneCalendar className="icon" />
				</div>
				<p className="rowItem" >
					Даты проведения акции: с 00:00 20.08.2024 по 23:59 30.06.2025.
				</p>
			</div>
			<div className="textRow"> 
				<div className="divIcon">
					<AiFillSafetyCertificate  className="icon" />
				</div>
				<p className="rowItem" >
					Акция доступна только тем пользователям, которые прошли верификацию аккаунта на сайте <span style={{color:"#FF0055"}}>grandcasino.by</span> с 19.08.2024.
				</p>
			</div>
			<div className="textRow">
				<div className="divIcon">
					<MdPayments className="icon" />
				</div>
				<p className="rowItem" >
					Сделайте ПЕРВЫЙ депозит на сумму от 20 BYN и получите ПЕРВЫЙ бонус – 50 фриспинов в слот-игре Rise of Zeus от Belatra. В случае, если ПЕРВЫЙ депозит будет сделан не позже, чем в течение 72 часов после верификации, Вы также получите дополнительные 20 фриспинов в слот-игре Lucky Streak 3 от Endorphina. (Внимание! Если первый депозит будет менее 20 BYN, первый и последующие этапы бонуса будут недоступны).
				</p>
			</div>
			<div className="textRow">
				<div className="divIcon">
					 <MdPayments className="icon" />
				</div>
				<p className="rowItem" >
					Сделайте ВТОРОЙ депозит на сумму от 40 BYN и получите ВТОРОЙ бонус – 50 фриспинов в слот-игре Diamond Cats от Amatic (Внимание! Если второй депозит будет менее 40 BYN, второй и последующие этапы бонуса будут недоступны).{" "}
				</p>
			</div>
            
			<div className="textRow">
				<div className="divIcon">
					 <MdPayments className="icon" />
				</div>
				<p className="rowItem" >
					Сделайте ТРЕТИЙ депозит на сумму от 50 BYN и получите ТРЕТИЙ бонус – 100 BYN вейджер бонус (Внимание! Если третий депозит будет менее 50 BYN, третий и последующие этапы бонуса будут недоступны).{" "}
				</p>
			</div>
			<div className="textRow">
				<div className="divIcon">
					 <MdPayments className="icon" />
				</div>
				<p className="rowItem" >
					Сделайте ЧЕТВЕРТЫЙ депозит на сумму от 100 BYN и получите ЧЕТВЕРТЫЙ бонус – 100 фриспинов в слот-игре Big Bass Bonanza от Pragmatic Play (Внимание! Если четвертый депозит будет менее 100 BYN, четвертый этап бонуса будет недоступен).{"\n\n "}
				</p>
			</div>
			<div className="textRow">
				<div className="divIcon">
					 <MdPayments className="icon" />
				</div>
				<p className="rowItem" >
					Клиент может вносить депозиты и на меньшую сумму, однако в этом случае приветственный бонус (этап бонуса) не будет предоставлен.
				</p>
			</div>
		</section>
    
  );
}

export default TextSection;
