<ion-content padding id="home_page" >
  <img class="header_image" src="../assets/imgs/brand.png"/>
  <ion-row>
      <ion-col col-12>
      <ion-searchbar class="assets_search"></ion-searchbar>
      <button ion-button color="secondary" class="right" >Expand</button>
      </ion-col>
  </ion-row>

  <ion-row>
    <ion-col col-12>
            <h6>Location</h6>
            <ion-list class="accordion-list">
                    <!-- First Level -->
                    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>
                      <!-- Toggle Button -->
                      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{'section-active': item.open, 'section': !item.open}">
                          {{ item.name }}
                        <ion-icon item-left name="add" *ngIf="!item.open"></ion-icon>
                        <ion-icon item-left name="remove" *ngIf="item.open"></ion-icon>
                      </button>
                 
                      <ion-list *ngIf="item.children && item.open" no-lines>
                        <!-- Second Level -->
                        <ion-list radio-group>
                        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>
                          <!-- Toggle Button -->
                          <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>
                            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>
                            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>
                            {{ child.name }}
                          </button>
                            <!-- <ion-list-header>
                              {{ child.name }}
                            </ion-list-header> -->
                          <!-- Direct Add Button as Fallback -->
                          <!-- <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>
                            <h2>{{ child.name }}</h2> -->
                            <!-- <p text-lowercase>{{ child.information }}</p>
                            <button ion-button outline item-end (click)="buyItem(child)">{{ child.price }}</button> -->
                          <!-- </ion-item> -->
                 
                          <ion-list *ngIf="child.children && child.open">
                            <!-- Third Level -->
                            <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>
                              <h2>{{ item.name }}</h2>
                              <p text-lowercase>{{ item.information }}</p>
                              <!-- Direct Add Button -->
                              <!-- <button ion-button outline item-end (click)="buyItem(item)">{{ item.price }}</button> -->
                            </ion-item>
                          </ion-list>
                 
                        </ion-list-header>
                        </ion-list>
                      </ion-list>
                      
                    </ion-list-header>
                  </ion-list>
        
    </ion-col>




  <ion-col col-12>
    <button ion-button color="secondary" full (click)=regsen4()>Select</button>
  </ion-col>
</ion-row>

</ion-content>
