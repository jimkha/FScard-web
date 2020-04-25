<aside className="sidebar">
  <div className="sidebar__btn-create">
    <img class="icon-plus" src={icon_plus} alt="" />
    <span>New</span>
  </div>
  <div className="sidebar__options">
    <a className="btn active">
      <img src={icon_card} alt="" className="icon icon_card" />
      My flashcards
    </a>
    <a className="btn">
      <img src={icon_collection} alt="" className="icon icon_collection" />
      My collections
    </a>
    <a className="btn">
      <img src={icon_revision} alt="" className="icon icon_revision" />
      Revision
    </a>
    <a className=" btn-storage">
      <div className="wrapper">
        <img src={icon_storage} alt="" className="icon  icon_storage" />
        <p>Storage</p>
      </div>

      <div className="status-bar">
        <div className="percent"></div>
      </div>
      <p className="number-percent-storage">123 bytes of 3 GB used</p>
    </a>
  </div>
</aside>;
