function relations(DB: any): void {
  const { Websites, Users, Pages, Components, Providers, Styles, Inputs } = DB;
  const cascade = { onDelete: 'SET NULL', onUpdate: 'CASCADE' };

  Websites.belongsTo(Users, { as: 'user', foreignKey: 'user_id', ...cascade });
  Pages.belongsTo(Websites, { as: 'website', foreignKey: 'website_id', ...cascade });
  Providers.belongsTo(Components, { as: 'component', foreignKey: 'component_id' });
  Providers.belongsTo(Pages, { as: 'page', foreignKey: 'page_id' });
  Providers.belongsTo(Styles, { as: 'style', foreignKey: 'style_id' });

  Components.hasMany(Inputs, { foreignKey: 'component_id', as: 'inputs' });
  Inputs.belongsTo(Components, {
    foreignKey: 'component_id',
    as: 'component',
  });
}

export default relations;
