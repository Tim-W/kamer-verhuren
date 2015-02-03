<ion-view view-title="Zoek een kamer">
    <ion-nav-buttons>
        <nav-buttons></nav-buttons>
    </ion-nav-buttons>
    <ion-content class="padding">
        <h3>Vul hier uw gegevens in</h3>
        <div class="list">
            <label class="item item-input item-stacked-label">
                <span class="input-label">Voornaam</span>
                <input type="text" placeholder="Jan" ng-model="firstName">
            </label>
            <label class="item item-input item-stacked-label">
                <span class="input-label">Achternaam</span>
                <input type="text" placeholder="Alleman" ng-model="lastName">
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
        <button ui-sref="room-is-searched" ng-click="searchRoom(firstName, lastName, categorySelected)" class="button button-block icon-right ion-chevron-right button-balanced">
            Invoeren
        </button>
    </ion-content>
</ion-view>