def get_all_child_category_ids(categories=None):
    if not categories:
        return []
    ids = []
    for category in categories:
        if category['sub_categories']:
            ids.append(get_all_child_category_ids(category['sub_categories']))
        else:
            ids.append(category['id'])
    return ids


