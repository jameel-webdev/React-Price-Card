import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Bscard({ card }) {

    return (
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{card.plan}</h5>
                    <h6 class="card-price text-center">{card.usd}<span class="period">/month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                        {card.features.map((item) =>
                            <li class={`${item.txtpro ? "text-muted" : ""}`}>
                                <span class="fa-li">
                                    < FontAwesomeIcon icon={item.txtpro ? faTimes : faCheck} />
                                </span>
                                {item.title}
                            </li>)}
                    </ul>
                    <div class="d-grid">
                        <a href="##" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Bscard;