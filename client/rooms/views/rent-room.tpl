<ion-view view-title="Verhuur een kamer">
    <ion-nav-buttons>
        <nav-buttons></nav-buttons>
    </ion-nav-buttons>
    <ion-content class="padding">
        <h3>Vul hier uw gegevens in</h3>
        <div class="list">
            <label class="item item-input item-stacked-label">
                <span class="input-label">E-mailadres</span>
                <input type="email" placeholder="jan@alleman.nl" ng-model="email">
            </label>
            <label class="item item-input item-stacked-label">
                <span class="input-label">Wachtwoord</span>
                <input type="password" ng-model="password">
            </label>
            <label class="item item-input item-select">
                <div class="input-label">
                    Categorie
                </div>
                <select ng-model="categorySelected">
                    <option>Aan zee</option>
                    <option>Op de Veluwe</option>
                    <option>In de Weerribben</option>
                    <option>Op een eiland</option>
                </select>
            </label>
        </div>
        <button ui-sref="room-is-rent" ng-click="rentRoom(email, password, categorySelected)" class="button button-block icon-right ion-chevron-right button-balanced">
            Invoeren
        </button>
    </ion-content>
</ion-view>