<div class="modal" id="order">
    <div class="close">
        <div class="cross"></div>
    </div>
    <form>
        <p>Форма заказа</p>
        <h1>WOW Catering</h1>
        <div class="clean">
            <div class="box left">
                <input class="form_control" type="text" name="fio" placeholder="Имя">
                <input class="form_control" type="tel" name="tel" placeholder="Телефон">
                <input class="form_control" type="email" name="mail" placeholder="E-mail">
            </div>
            <div class="box right">
                <label>
                    <select class="form_control_select">
                        <option value="" disabled selected style='display:none;'>Выбрать услугу</option>
                        <option value="">Услуга 1</option>
                        <option value="">Услуга 2</option>
                        <option value="">Услуга 3</option>
                        <option value="">Услуга 4</option>
                        <option value="">Услуга 5</option>
                        <option value="">Услуга 6</option>
                    </select>
                </label>
                <textarea class="form_control comment" placeholder="Коментраий"></textarea>
            </div>
            <input type="hidden" neme="from_whence" value="form main page">
        </div>
        <div class="clear_flop"></div>

        <button class="btn">Заказать</button>
    </form>
</div>
